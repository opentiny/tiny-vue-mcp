import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTimeRangeConfig = () =>
  defineComponentTool({
    name: 'time_range_component_tools',
    description: t('ai.timeRange.description'),
    tools: {
      getRange: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeRange.getRange')),
        cb: (instance) => {
          const range = instance.modelValue || instance.range || []
          return { type: 'text', text: JSON.stringify({ start: range[0], end: range[1] }) }
        }
      },
      setRange: {
        paramsSchema: z.array(z.string()).describe(t('ai.timeRange.setRange')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Time range set from ${params[0]} to ${params[1]}` }
        }
      },
      getStartTime: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeRange.getStartTime')),
        cb: (instance) => {
          const start = instance.startTime || null
          return { type: 'text', text: JSON.stringify({ start }) }
        }
      },
      setStartTime: {
        paramsSchema: z.string().describe(t('ai.timeRange.setStartTime')),
        cb: (instance, params) => {
          instance.startTime = params
          return { type: 'text', text: `Start time set to ${params}` }
        }
      }
    }
  })
