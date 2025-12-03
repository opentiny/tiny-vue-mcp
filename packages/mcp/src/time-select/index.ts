import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTimeSelectConfig = () =>
  defineComponentTool({
    name: 'time_select_component_tools',
    description: t('ai.timeSelect.description'),
    tools: {
      getSelectedTime: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeSelect.getSelectedTime')),
        cb: (instance) => {
          const time = instance.modelValue || instance.selectedTime || null
          return { type: 'text', text: JSON.stringify({ time }) }
        }
      },
      setSelectedTime: {
        paramsSchema: z.string().describe(t('ai.timeSelect.setSelectedTime')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Time set to ${params}` }
        }
      },
      getOptions: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeSelect.getOptions')),
        cb: (instance) => {
          const options = instance.options || []
          return { type: 'text', text: JSON.stringify({ options: options.slice(0, 10), total: options.length }) }
        }
      },
      clearSelection: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeSelect.clearSelection')),
        cb: (instance) => {
          instance.modelValue = null
          return { type: 'text', text: 'Selection cleared' }
        }
      }
    }
  })
