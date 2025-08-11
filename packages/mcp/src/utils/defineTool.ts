import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

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
  server: McpServer
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

  server.registerTool(name, { title: name, description, inputSchema: paramsSchema }, cb)
}
