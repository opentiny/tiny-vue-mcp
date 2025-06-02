export interface ComponentTool {
  /** 组件的工具名 */
  name: string
  /** 组件具有的功能描述 */
  description: string
  /** 组件的工具集合 */
  tools: Record<
    string,
    {
      paramsSchema: any
      cb: (instance: any, value: any) => any
    }
  >
}

export interface RealComponentTool {
  /** 组件的工具名 */
  name: string
  /** 组件具有的功能描述 */
  description: string
  /** 每个功能都应该有一个 zod schema描述  */
  paramsSchema: any
  /** 汇总所有功能到一起的tool */
  cb: (instance: any, params: Record<string, any>) => void
}

export const getParamsSchema = (tools: any) => {
  return Object.keys(tools).reduce((acc, key) => {
    acc[key] = tools[key].paramsSchema
    return acc
  }, {})
}

export const defineComponentTool = (componentMcpConfig: ComponentTool): RealComponentTool => {
  const realTool: RealComponentTool = {
    name: componentMcpConfig.name,
    description: componentMcpConfig.description,
    paramsSchema: getParamsSchema(componentMcpConfig.tools),
    cb: (instance: any, args) => {
      if (!args || !Object.keys(args).length) {
        return { content: [{ type: 'text', text: 'no tools' }] }
      }

      const results = Object.entries(args).map(([key, value]) => {
        const tool = componentMcpConfig.tools[key]
        if (!tool) {
          return { content: [{ type: 'text', text: `tool ${key} not found` }] }
        }
        return tool.cb(instance, value)
      })

      return { content: results }
    }
  }
  return realTool
}
