import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDropdownConfig = () =>
  defineComponentTool({
    name: 'dropdown_component_tools',
    description: t('ai.dropdown.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdown.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Dropdown opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdown.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Dropdown closed' }
        }
      },
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdown.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ items, count: items.length }) }
        }
      },
      selectItem: {
        paramsSchema: z.unknown().describe(t('ai.dropdown.selectItem')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Item selected successfully' }
        }
      }
    }
  })
