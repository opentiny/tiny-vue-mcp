import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getDateRangeConfig = () =>
  defineComponentTool({
    name: 'date_range_component_tools',
    description: t('ai.dateRange.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.dateRange.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || []
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.array(z.string()).optional().describe(t('ai.dateRange.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.dateRange.clear')),
        cb: (instance) => {
          instance.modelValue = []
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
