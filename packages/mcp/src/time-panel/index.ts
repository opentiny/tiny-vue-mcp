import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTimePanelConfig = () =>
  defineComponentTool({
    name: 'time_panel_component_tools',
    description: t('ai.timePanel.description'),
    tools: {
      getTime: {
        paramsSchema: z.boolean().optional().describe(t('ai.timePanel.getTime')),
        cb: (instance) => {
          const time = instance.modelValue || null
          return { type: 'text', text: JSON.stringify({ time }) }
        }
      },
      setTime: {
        paramsSchema: z.string().describe(t('ai.timePanel.setTime')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Time set to ${params}` }
        }
      },
      getHour: {
        paramsSchema: z.boolean().optional().describe(t('ai.timePanel.getHour')),
        cb: (instance) => {
          const hour = instance.hour || 0
          return { type: 'text', text: JSON.stringify({ hour }) }
        }
      },
      setHour: {
        paramsSchema: z.number().min(0).max(23).describe(t('ai.timePanel.setHour')),
        cb: (instance, params) => {
          instance.hour = params
          return { type: 'text', text: `Hour set to ${params}` }
        }
      }
    }
  })
