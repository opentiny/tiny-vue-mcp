import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFormItemConfig = () =>
  defineComponentTool({
    name: 'form_item_component_tools',
    description: t('ai.formItem.description'),
    tools: {
      getLabel: {
        paramsSchema: z.boolean().optional().describe(t('ai.formItem.getLabel')),
        cb: (instance) => {
          const label = instance.label || ''
          return { type: 'text', text: JSON.stringify({ label }) }
        }
      },
      setLabel: {
        paramsSchema: z.string().describe(t('ai.formItem.setLabel')),
        cb: (instance, params) => {
          instance.label = params
          return { type: 'text', text: `Label set to ${params}` }
        }
      },
      validate: {
        paramsSchema: z.boolean().optional().describe(t('ai.formItem.validate')),
        cb: (instance) => {
          const isValid = instance.isValid !== false
          return { type: 'text', text: JSON.stringify({ isValid }) }
        }
      },
      getError: {
        paramsSchema: z.boolean().optional().describe(t('ai.formItem.getError')),
        cb: (instance) => {
          const error = instance.error || null
          return { type: 'text', text: JSON.stringify({ error }) }
        }
      }
    }
  })
