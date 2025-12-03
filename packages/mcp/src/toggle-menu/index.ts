import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getToggleMenuConfig = () =>
  defineComponentTool({
    name: 'toggle_menu_component_tools',
    description: t('ai.toggleMenu.description'),
    tools: {
      toggle: {
        paramsSchema: z.boolean().optional().describe(t('ai.toggleMenu.toggle')),
        cb: (instance) => {
          instance.open = !instance.open
          return { type: 'text', text: 'Menu toggled' }
        }
      },
      isOpen: {
        paramsSchema: z.boolean().optional().describe(t('ai.toggleMenu.isOpen')),
        cb: (instance) => ({ type: 'text', text: String(instance.open || false) })
      }
    }
  })
