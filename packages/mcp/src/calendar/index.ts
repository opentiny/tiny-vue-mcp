import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getCalendarConfig = () =>
  defineComponentTool({
    name: 'calendar_component_tools',
    description: t('ai.calendar.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.calendar.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || instance.value || null
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.string().optional().describe(t('ai.calendar.setValue')),
        cb: (instance, value) => {
          if (value) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      reset: {
        paramsSchema: z.boolean().optional().describe(t('ai.calendar.reset')),
        cb: (instance) => {
          instance.modelValue = new Date()
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
