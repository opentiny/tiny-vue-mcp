import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getChartConfig = () =>
  defineComponentTool({
    name: 'chart_component_tools',
    description: t('ai.chart.description'),
    tools: {
      getData: {
        paramsSchema: z.boolean().optional().describe(t('ai.chart.getData')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.data || {}) })
      },
      refresh: {
        paramsSchema: z.boolean().optional().describe(t('ai.chart.refresh')),
        cb: (instance) => ({ type: 'text', text: 'Chart refreshed' })
      }
    }
  })
