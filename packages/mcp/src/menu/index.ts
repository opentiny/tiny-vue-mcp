import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getMenuConfig = () =>
  defineComponentTool({
    name: 'menu_component_tools',
    description: t('ai.menu.description'),
    tools: {
      getActiveIndex: {
        paramsSchema: z.boolean().optional().describe(t('ai.menu.getActiveIndex')),
        cb: (instance) => {
          const activeIndex = instance.activeIndex || 0
          return { type: 'text', text: JSON.stringify({ activeIndex }) }
        }
      },
      setActiveIndex: {
        paramsSchema: z.string().optional().describe(t('ai.menu.setActiveIndex')),
        cb: (instance, value) => {
          if (value) {
            instance.activeIndex = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
