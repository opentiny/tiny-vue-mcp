import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { z } from 'zod'
import { initializeBuiltinWebMCP } from '@opentiny/next-sdk/core'
import { defineTool } from '../defineTool'
import { createMcpTools, getTinyVueMcpConfig } from '../../../index'

vi.mock('@opentiny/next-sdk/core', () => ({ initializeBuiltinWebMCP: vi.fn() }))
beforeEach(() => {
  vi.mocked(initializeBuiltinWebMCP).mockReset()
})
afterEach(() => vi.unstubAllGlobals())

const business = { id: 'test-grid', description: 'Test grid' }
const makeConfig = () => ({
  name: 'grid_component_tools',
  description: 'Grid operations',
  paramsSchema: { getTableData: z.boolean().optional() },
  cb: vi.fn(async () => ({ content: [{ type: 'text', text: 'rows' }] }))
})

describe('WebMCP component tool adapter', () => {
  it('registers a descriptor with JSON Schema and awaits validated execution', async () => {
    const registerTool = vi.fn()
    vi.stubGlobal('document', { modelContext: { registerTool } })
    const componentMcpConfig = makeConfig()
    const instance = { rows: [] }
    const dispose = defineTool({ instance, business, componentMcpConfig })
    const [tool, options] = registerTool.mock.calls[0]

    expect(tool.name).toBe('test-grid_grid_component_tools')
    expect(tool.inputSchema).toMatchObject({
      type: 'object',
      properties: { getTableData: { type: 'boolean' } },
      additionalProperties: false,
      minProperties: 1
    })
    expect(await tool.execute({ getTableData: true })).toEqual({ content: [{ type: 'text', text: 'rows' }] })
    expect(componentMcpConfig.cb).toHaveBeenCalledWith(instance, { getTableData: true })
    dispose?.()
    expect(options.signal.aborted).toBe(true)
  })

  it('rejects unknown operations, invalid types and empty arguments before invoking the component', async () => {
    const registerTool = vi.fn()
    vi.stubGlobal('document', { modelContext: { registerTool } })
    const componentMcpConfig = makeConfig()
    defineTool({ instance: {}, business, componentMcpConfig })
    const [tool] = registerTool.mock.calls[0]
    await expect(tool.execute({ missing: true })).rejects.toThrow()
    await expect(tool.execute({ getTableData: 'true' })).rejects.toThrow()
    await expect(tool.execute({})).rejects.toThrow()
    expect(componentMcpConfig.cb).not.toHaveBeenCalled()
  })

  it.each([undefined, {}])(
    'allows empty arguments for parameterless tools with paramsSchema %j',
    async (paramsSchema) => {
      const registerTool = vi.fn()
      vi.stubGlobal('document', { modelContext: { registerTool } })
      const componentMcpConfig = { ...makeConfig(), paramsSchema }
      const instance = {}
      defineTool({ instance, business, componentMcpConfig })
      const [tool] = registerTool.mock.calls[0]

      expect(tool.inputSchema).not.toHaveProperty('minProperties')
      expect(tool.inputSchema).toMatchObject({ type: 'object', properties: {}, additionalProperties: false })
      expect(await tool.execute({})).toEqual({ content: [{ type: 'text', text: 'rows' }] })
      expect(componentMcpConfig.cb).toHaveBeenCalledWith(instance, {})
      await expect(tool.execute({ unexpected: true })).rejects.toThrow()
      expect(componentMcpConfig.cb).toHaveBeenCalledOnce()
    }
  )

  it('does not initialize browser APIs during SSR', () => {
    vi.stubGlobal('document', undefined)
    expect(defineTool({ instance: {}, business, componentMcpConfig: makeConfig() })).toBeUndefined()
    expect(initializeBuiltinWebMCP).not.toHaveBeenCalled()
  })

  it('injects the Polyfill before registration and only initializes once per document', () => {
    const registerTool = vi.fn()
    const browserDocument = { modelContext: undefined as unknown }
    vi.stubGlobal('document', browserDocument)
    vi.mocked(initializeBuiltinWebMCP).mockImplementation(() => {
      browserDocument.modelContext = { registerTool }
    })
    expect(getTinyVueMcpConfig().components.Grid).toBeDefined()
    defineTool({ instance: {}, business, componentMcpConfig: makeConfig() })
    defineTool({ instance: {}, business: { ...business, id: 'second-grid' }, componentMcpConfig: makeConfig() })
    expect(initializeBuiltinWebMCP).toHaveBeenCalledOnce()
    expect(registerTool).toHaveBeenCalledTimes(2)
    expect(vi.mocked(initializeBuiltinWebMCP).mock.invocationCallOrder[0]).toBeLessThan(
      registerTool.mock.invocationCallOrder[0]
    )
  })

  it('reports initialization failure and allows a later retry', () => {
    const browserDocument = { modelContext: undefined as unknown }
    vi.stubGlobal('document', browserDocument)
    expect(() => defineTool({ instance: {}, business, componentMcpConfig: makeConfig() })).toThrow(
      'Failed to initialize'
    )
    vi.mocked(initializeBuiltinWebMCP).mockImplementation(() => {
      browserDocument.modelContext = { registerTool: vi.fn() }
    })
    expect(() => defineTool({ instance: {}, business, componentMcpConfig: makeConfig() })).not.toThrow()
    expect(initializeBuiltinWebMCP).toHaveBeenCalledTimes(2)
  })

  it.each(['missing-context', 'throws'])('keeps explicit-server setup working when initialization %s', (failure) => {
    vi.stubGlobal('document', {})
    if (failure === 'throws') {
      vi.mocked(initializeBuiltinWebMCP).mockImplementation(() => {
        throw new Error('Polyfill unavailable')
      })
    }
    const config = getTinyVueMcpConfig()
    const remove = vi.fn()
    const registerTool = vi.fn(() => ({ remove }))
    const server = { registerTool } as unknown as NonNullable<Parameters<typeof defineTool>[0]['server']>
    const dispose = createMcpTools({}, { business, server }, config.components.Grid)

    expect(registerTool).toHaveBeenCalledWith(
      'test-grid_grid_component_tools',
      expect.objectContaining({ inputSchema: config.components.Grid.paramsSchema }),
      expect.any(Function)
    )
    expect(initializeBuiltinWebMCP).toHaveBeenCalledOnce()
    dispose?.()
    expect(remove).toHaveBeenCalledOnce()
    // 配置获取允许回退，真正选择 WebMCP 注册时仍重试并报告初始化错误。
    expect(() => createMcpTools({}, { business }, config.components.Grid)).toThrow(
      failure === 'throws' ? 'Polyfill unavailable' : 'Failed to initialize'
    )
    expect(initializeBuiltinWebMCP).toHaveBeenCalledTimes(2)
  })

  it('preserves explicit legacy MCP Server registration and removes its tool on disposal', () => {
    const remove = vi.fn()
    const registerTool = vi.fn(() => ({ remove }))
    const server = { registerTool } as unknown as NonNullable<Parameters<typeof defineTool>[0]['server']>
    const componentMcpConfig = makeConfig()
    const dispose = defineTool({ instance: {}, business, componentMcpConfig, server })
    expect(registerTool).toHaveBeenCalledWith(
      'test-grid_grid_component_tools',
      expect.objectContaining({ inputSchema: componentMcpConfig.paramsSchema }),
      expect.any(Function)
    )
    dispose?.()
    expect(remove).toHaveBeenCalledOnce()
    expect(initializeBuiltinWebMCP).not.toHaveBeenCalled()
  })
})
