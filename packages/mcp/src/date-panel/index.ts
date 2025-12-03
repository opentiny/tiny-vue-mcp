import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDatePanelConfig = () =>
  defineComponentTool({
    name: 'date_panel_component_tools',
    description: t('ai.datePanel.description'),
    tools: {
      getDate: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePanel.getDate')),
        cb: (instance) => {
          const date = instance.modelValue || null
          return { type: 'text', text: JSON.stringify({ date }) }
        }
      },
      setDate: {
        paramsSchema: z.string().describe(t('ai.datePanel.setDate')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Date set to ${params}` }
        }
      },
      nextMonth: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePanel.nextMonth')),
        cb: (instance) => {
          return { type: 'text', text: 'Advanced to next month' }
        }
      },
      previousMonth: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePanel.previousMonth')),
        cb: (instance) => {
          return { type: 'text', text: 'Moved to previous month' }
        }
      }
    }
  })
