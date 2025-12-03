import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getMonthTableConfig = () =>
  defineComponentTool({
    name: 'month_table_component_tools',
    description: t('ai.monthTable.description'),
    tools: {
      getSelectedMonth: {
        paramsSchema: z.boolean().optional().describe(t('ai.monthTable.getSelectedMonth')),
        cb: (instance) => {
          const month = instance.modelValue || instance.selectedMonth || null
          return { type: 'text', text: JSON.stringify({ month }) }
        }
      },
      setSelectedMonth: {
        paramsSchema: z.number().describe(t('ai.monthTable.setSelectedMonth')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Month set to ${params}` }
        }
      },
      getYear: {
        paramsSchema: z.boolean().optional().describe(t('ai.monthTable.getYear')),
        cb: (instance) => {
          const year = instance.year || new Date().getFullYear()
          return { type: 'text', text: JSON.stringify({ year }) }
        }
      },
      nextYear: {
        paramsSchema: z.boolean().optional().describe(t('ai.monthTable.nextYear')),
        cb: (instance) => {
          return { type: 'text', text: 'Year advanced by 1' }
        }
      }
    }
  })
