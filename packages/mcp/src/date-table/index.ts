import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDateTableConfig = () =>
  defineComponentTool({
    name: 'date_table_component_tools',
    description: t('ai.dateTable.description'),
    tools: {
      getSelectedDate: {
        paramsSchema: z.boolean().optional().describe(t('ai.dateTable.getSelectedDate')),
        cb: (instance) => {
          const date = instance.modelValue || null
          return { type: 'text', text: JSON.stringify({ date }) }
        }
      },
      setSelectedDate: {
        paramsSchema: z.string().describe(t('ai.dateTable.setSelectedDate')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Date selected: ${params}` }
        }
      },
      getMonth: {
        paramsSchema: z.boolean().optional().describe(t('ai.dateTable.getMonth')),
        cb: (instance) => {
          const month = instance.month || new Date().getMonth() + 1
          return { type: 'text', text: JSON.stringify({ month }) }
        }
      },
      getDates: {
        paramsSchema: z.boolean().optional().describe(t('ai.dateTable.getDates')),
        cb: (instance) => {
          const dates = instance.dates || []
          return { type: 'text', text: JSON.stringify({ dates: dates.slice(0, 7), total: dates.length }) }
        }
      }
    }
  })
