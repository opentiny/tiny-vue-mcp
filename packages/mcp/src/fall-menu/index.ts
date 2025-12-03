import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFallMenuConfig = () =>
  defineComponentTool({
    name: 'fall_menu_component_tools',
    description: t('ai.fallMenu.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.fallMenu.open')),
        cb: (instance) => {
          instance.open = true
          return { type: 'text', text: 'Menu opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.fallMenu.close')),
        cb: (instance) => {
          instance.open = false
          return { type: 'text', text: 'Menu closed' }
        }
      }
    }
  })
