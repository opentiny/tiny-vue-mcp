import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getNavMenuConfig = () =>
  defineComponentTool({
    name: 'nav_menu_component_tools',
    description: t('ai.navMenu.description'),
    tools: {
      getActiveKey: {
        paramsSchema: z.boolean().optional().describe(t('ai.navMenu.getActiveKey')),
        cb: (instance) => {
          const activeKey = instance.activeKey || ''
          return { type: 'text', text: JSON.stringify({ activeKey }) }
        }
      },
      setActiveKey: {
        paramsSchema: z.string().optional().describe(t('ai.navMenu.setActiveKey')),
        cb: (instance, value) => {
          if (value) {
            instance.activeKey = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
