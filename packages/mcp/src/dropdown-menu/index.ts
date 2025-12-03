import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDropdownMenuConfig = () =>
  defineComponentTool({
    name: 'dropdown_menu_component_tools',
    description: t('ai.dropdownMenu.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdownMenu.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Menu opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdownMenu.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Menu closed' }
        }
      },
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdownMenu.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ items, count: items.length }) }
        }
      },
      addItem: {
        paramsSchema: z.object({ label: z.string(), value: z.unknown() }).describe(t('ai.dropdownMenu.addItem')),
        cb: (instance, params) => {
          return { type: 'text', text: `Item added: ${params.label}` }
        }
      }
    }
  })
