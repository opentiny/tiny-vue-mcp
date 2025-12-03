import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getAmountConfig = () =>
  defineComponentTool({
    name: 'amount_component_tools',
    description: t('ai.amount.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.amount.getValue')),
        cb: (instance) => ({ type: 'text', text: String(instance.value || 0) })
      },
      setValue: {
        paramsSchema: z.number().describe(t('ai.amount.setValue')),
        cb: (instance, params: number) => {
          instance.value = params
          return { type: 'text', text: 'Amount set' }
        }
      }
    }
  })
