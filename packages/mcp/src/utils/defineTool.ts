import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { initializeBuiltinWebMCP } from '@opentiny/next-sdk/core'

const initializedDocuments = new WeakSet<Document>()

// 每个页面只初始化一次，避免后续组件注册时重置已有工具或重复安装桥接。
// SSR 不触碰浏览器 API；初始化失败时允许下次重试。
export const ensureWebMcp = () => {
  if (typeof document === 'undefined') return
  const currentDocument = document as WebMcpDocument
  if (!initializedDocuments.has(document)) {
    initializeBuiltinWebMCP()
    if (!currentDocument.modelContext) {
      throw new Error('[TinyVue WebMCP] Failed to initialize document.modelContext')
    }
    initializedDocuments.add(document)
  }
  return currentDocument.modelContext
}

/** 开发人员传入的业务信息 id要保证唯一性 */
export interface Business {
  id: string
  description: string
}

/** 组件所有的功能行为都集中在tool里面 */
export interface ComponentMcpConfig {
  name: string
  description: string
  paramsSchema?: Record<string, any>
  cb: (instance: any, args: Record<string, any>) => any
}

export interface DefineToolOptions {
  componentMcpConfig: ComponentMcpConfig
  /** tool 可操纵的上下文的变量和方法集合 */
  instance: any
  server?: McpServer
  business: Business
}

/**
 * 快速定义一个业务tool的方法
 * @param componentMcpConfig 组件的可用工具集
 * @param instance 工具可操作的上下文实例, Vue中是传入实例,其它场景可能传入 {数据, 方法等}
 * @param server MCP 服务器实例
 * @param business 业务信息
 */
export const defineTool = ({ componentMcpConfig, instance, server, business }: DefineToolOptions) => {
  const name = `${business.id}_${componentMcpConfig.name}`
  const description = `${business.description}-${componentMcpConfig.description}`
  const paramsSchema = componentMcpConfig.paramsSchema || {}
  const cb = (args: Record<string, any>) => {
    return componentMcpConfig.cb(instance, args)
  }

  // 保留显式传入 MCP Server 的旧调用方式。
  if (server) {
    const tool = server.registerTool(name, { title: name, description, inputSchema: paramsSchema }, cb)
    return () => tool.remove()
  }

  // WebMCP 注册由组件库内部完成，应用仅需提供业务信息。
  const modelContext = ensureWebMcp()
  if (!modelContext) return

  const hasOperations = Object.keys(paramsSchema).length > 0
  const objectSchema = z.object(paramsSchema).strict()
  const schema = hasOperations
    ? objectSchema.refine((args) => Object.keys(args).length > 0, {
        message: 'At least one component operation is required'
      })
    : objectSchema
  const controller = new AbortController()
  const registration = modelContext.registerTool(
    {
      name,
      title: name,
      description,
      // WebMCP 接收 JSON Schema，而非 MCP Server 接收的 Zod shape。
      inputSchema: {
        ...zodToJsonSchema(schema, { $refStrategy: 'none' }),
        ...(hasOperations ? { minProperties: 1 } : {})
      },
      execute: async (args: Record<string, unknown>) => cb(await schema.parseAsync(args))
    },
    { signal: controller.signal }
  )
  // 原生/Polyfill 可以异步注册；卸载导致的主动取消不作为异常上报。
  Promise.resolve(registration).catch((error: unknown) => {
    if (!controller.signal.aborted) console.error(`[TinyVue WebMCP] Failed to register ${name}`, error)
  })
  return () => controller.abort()
}

interface WebMcpDocument extends Document {
  modelContext?: {
    registerTool: (
      tool: {
        name: string
        title: string
        description: string
        inputSchema: Record<string, unknown>
        execute: (args: Record<string, unknown>) => Promise<unknown>
      },
      options: { signal: AbortSignal }
    ) => void | Promise<void>
  }
}
