import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTabsConfig = () =>
  defineComponentTool({
    name: 'tabs_component_tools',
    description: t('ai.tabs.description'),
    tools: {
      getCurrentTab: {
        paramsSchema: z.boolean().optional().describe(t('ai.tabs.getCurrentTab')),
        cb: (instance) => {
          const currentTab = instance.modelValue || instance.activeTab || 0
          return { type: 'text', text: JSON.stringify({ currentTab }) }
        }
      },
      setCurrentTab: {
        paramsSchema: z.string().optional().describe(t('ai.tabs.setCurrentTab')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      getTabsCount: {
        paramsSchema: z.boolean().optional().describe(t('ai.tabs.getTabsCount')),
        cb: (instance) => {
          const count = instance.tabs?.length || 0
          return { type: 'text', text: JSON.stringify({ count }) }
        }
      }
    }
  })
