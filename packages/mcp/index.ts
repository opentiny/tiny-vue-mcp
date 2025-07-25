import { defineTool } from './src/utils/defineTool'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { Business, ComponentMcpConfig } from './src/utils/defineTool'
import zhCN from './src/lang/zh-CN'
import enUS from './src/lang/en'
import { getGridConfig } from './src/grid'
import { getTreeConfig } from './src/tree'
import { getBaseSelectConfig } from './src/base-select'
import { i18n } from './src/utils/locale'
import { getButtonConfig } from './src/button'
import { getFormConfig } from './src/form'

export { zhCN, enUS, i18n }

export const createMcpTools = (
  instance: any,
  { server, business }: { server: McpServer; business: Business },
  componentMcpConfig: ComponentMcpConfig
) => {
  defineTool({ business, componentMcpConfig, instance, server })
}

export const getTinyVueMcpConfig = ({ t }: { t?: ((path: string) => string) | null } = {}) => {
  if (i18n && t) {
    i18n.t = t
  }

  return {
    name: 'tiny-vue-mcp',
    version: '0.0.1',
    components: {
      Grid: getGridConfig(),
      Tree: getTreeConfig(),
      BaseSelect: getBaseSelectConfig(),
      Button: getButtonConfig(),
      Form: getFormConfig()
    }
  }
}
