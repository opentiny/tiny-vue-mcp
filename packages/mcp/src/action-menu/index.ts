import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getActionMenuConfig = () =>
  defineComponentTool({
    name: 'action_menu_component_tools',
    description: t('ai.actionMenu.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.actionMenu.open')),
        cb: (instance) => {
          instance.open = true
          return { type: 'text', text: 'Action menu opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.actionMenu.close')),
        cb: (instance) => {
          instance.open = false
          return { type: 'text', text: 'Action menu closed' }
        }
      },
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.actionMenu.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ items, count: items.length }) }
        }
      }
    }
  })
