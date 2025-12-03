import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSideConfig = () =>
  defineComponentTool({
    name: 'side_component_tools',
    description: t('ai.side.description'),
    tools: {
      getCollapsed: {
        paramsSchema: z.boolean().optional().describe(t('ai.side.getCollapsed')),
        cb: (instance) => {
          const collapsed = instance.collapsed || false
          return { type: 'text', text: JSON.stringify({ collapsed }) }
        }
      },
      setCollapsed: {
        paramsSchema: z.boolean().optional().describe(t('ai.side.setCollapsed')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.collapsed = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      toggleCollapsed: {
        paramsSchema: z.boolean().optional().describe(t('ai.side.toggleCollapsed')),
        cb: (instance) => {
          instance.collapsed = !instance.collapsed
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
