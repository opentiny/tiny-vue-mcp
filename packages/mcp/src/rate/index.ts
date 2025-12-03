import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getRateConfig = () =>
  defineComponentTool({
    name: 'rate_component_tools',
    description: t('ai.rate.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.rate.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || 0
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.number().optional().describe(t('ai.rate.setValue')),
        cb: (instance, value) => {
          if (value !== undefined && value >= 0) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.rate.clear')),
        cb: (instance) => {
          instance.modelValue = 0
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
