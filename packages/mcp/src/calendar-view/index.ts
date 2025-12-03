import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCalendarViewConfig = () =>
  defineComponentTool({
    name: 'calendar_view_component_tools',
    description: t('ai.calendarView.description'),
    tools: {
      getCurrentDate: {
        paramsSchema: z.boolean().optional().describe(t('ai.calendarView.getCurrentDate')),
        cb: (instance) => ({ type: 'text', text: instance.currentDate || '' })
      },
      jumpTo: {
        paramsSchema: z.string().describe(t('ai.calendarView.jumpTo')),
        cb: (instance, params) => ({ type: 'text', text: `Jumped to ${params}` })
      }
    }
  })
