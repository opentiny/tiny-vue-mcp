import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getStatisticConfig = () =>
  defineComponentTool({
    name: 'statistic_component_tools',
    description: t('ai.statistic.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.statistic.getValue')),
        cb: (instance) => {
          const value = instance.value || 0
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.number().describe(t('ai.statistic.setValue')),
        cb: (instance, params) => {
          instance.value = params
          return { type: 'text', text: `Value set to ${params}` }
        }
      },
      getTitle: {
        paramsSchema: z.boolean().optional().describe(t('ai.statistic.getTitle')),
        cb: (instance) => {
          const title = instance.title || ''
          return { type: 'text', text: JSON.stringify({ title }) }
        }
      },
      getPrefix: {
        paramsSchema: z.boolean().optional().describe(t('ai.statistic.getPrefix')),
        cb: (instance) => {
          const prefix = instance.prefix || ''
          return { type: 'text', text: JSON.stringify({ prefix }) }
        }
      }
    }
  })
