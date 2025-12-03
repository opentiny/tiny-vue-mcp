import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getCheckboxConfig = () =>
  defineComponentTool({
    name: 'checkbox_component_tools',
    description: t('ai.checkbox.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkbox.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || false
          return { type: 'text', text: JSON.stringify({ checked: value }) }
        }
      },
      setValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkbox.setValue')),
        cb: (instance, value) => {
          instance.modelValue = value
          return { type: 'text', text: 'success' }
        }
      },
      check: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkbox.check')),
        cb: (instance) => {
          instance.modelValue = true
          return { type: 'text', text: 'success' }
        }
      },
      uncheck: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkbox.uncheck')),
        cb: (instance) => {
          instance.modelValue = false
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
