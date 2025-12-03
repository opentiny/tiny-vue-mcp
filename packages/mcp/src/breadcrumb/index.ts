import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getBreadcrumbConfig = () =>
  defineComponentTool({
    name: 'breadcrumb_component_tools',
    description: t('ai.breadcrumb.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.breadcrumb.getItems')),
        cb: (instance) => {
          const items = instance.options || instance.items || []
          return { type: 'text', text: JSON.stringify({ items }) }
        }
      },
      setItems: {
        paramsSchema: z.array(z.any()).optional().describe(t('ai.breadcrumb.setItems')),
        cb: (instance, value) => {
          if (value && Array.isArray(value)) {
            instance.options = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
