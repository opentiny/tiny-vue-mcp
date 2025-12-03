import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFilterPanelConfig = () =>
  defineComponentTool({
    name: 'filter_panel_component_tools',
    description: t('ai.filterPanel.description'),
    tools: {
      getFilters: {
        paramsSchema: z.boolean().optional().describe(t('ai.filterPanel.getFilters')),
        cb: (instance) => {
          const filters = instance.filters || []
          return { type: 'text', text: JSON.stringify({ filters, count: filters.length }) }
        }
      },
      addFilter: {
        paramsSchema: z.object({ field: z.string(), operator: z.string(), value: z.unknown() }).describe(t('ai.filterPanel.addFilter')),
        cb: (instance, params) => {
          return { type: 'text', text: `Filter added: ${params.field} ${params.operator}` }
        }
      },
      removeFilter: {
        paramsSchema: z.number().describe(t('ai.filterPanel.removeFilter')),
        cb: (instance, params) => {
          return { type: 'text', text: `Filter removed at index ${params}` }
        }
      },
      clearFilters: {
        paramsSchema: z.boolean().optional().describe(t('ai.filterPanel.clearFilters')),
        cb: (instance) => {
          instance.filters = []
          return { type: 'text', text: 'All filters cleared' }
        }
      }
    }
  })
