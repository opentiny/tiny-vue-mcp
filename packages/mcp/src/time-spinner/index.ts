import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTimeSpinnerConfig = () =>
  defineComponentTool({
    name: 'time_spinner_component_tools',
    description: t('ai.timeSpinner.description'),
    tools: {
      getTime: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeSpinner.getTime')),
        cb: (instance) => {
          const time = instance.modelValue || null
          return { type: 'text', text: JSON.stringify({ time }) }
        }
      },
      setTime: {
        paramsSchema: z.string().describe(t('ai.timeSpinner.setTime')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Time set to ${params}` }
        }
      },
      increment: {
        paramsSchema: z.enum(['hour', 'minute', 'second']).describe(t('ai.timeSpinner.increment')),
        cb: (instance, params) => {
          return { type: 'text', text: `${params} incremented` }
        }
      },
      decrement: {
        paramsSchema: z.enum(['hour', 'minute', 'second']).describe(t('ai.timeSpinner.decrement')),
        cb: (instance, params) => {
          return { type: 'text', text: `${params} decremented` }
        }
      }
    }
  })
