import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getBadgeConfig = () =>
  defineComponentTool({
    name: 'badge_component_tools',
    description: t('ai.badge.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.badge.getValue')),
        cb: (instance) => {
          const value = instance.value || 0
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.any().optional().describe(t('ai.badge.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.value = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
