import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getYearTableConfig = () =>
  defineComponentTool({
    name: 'year_table_component_tools',
    description: t('ai.yearTable.description'),
    tools: {
      getSelectedYear: {
        paramsSchema: z.boolean().optional().describe(t('ai.yearTable.getSelectedYear')),
        cb: (instance) => {
          const year = instance.modelValue || instance.selectedYear || null
          return { type: 'text', text: JSON.stringify({ year }) }
        }
      },
      setSelectedYear: {
        paramsSchema: z.number().describe(t('ai.yearTable.setSelectedYear')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Year set to ${params}` }
        }
      },
      getYearRange: {
        paramsSchema: z.boolean().optional().describe(t('ai.yearTable.getYearRange')),
        cb: (instance) => {
          const start = instance.startYear || new Date().getFullYear() - 10
          const end = start + 10
          return { type: 'text', text: JSON.stringify({ start, end }) }
        }
      },
      nextDecade: {
        paramsSchema: z.boolean().optional().describe(t('ai.yearTable.nextDecade')),
        cb: (instance) => {
          return { type: 'text', text: 'Year range advanced by 10 years' }
        }
      }
    }
  })
