import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCheckboxButtonConfig = () =>
  defineComponentTool({
    name: 'checkbox_button_component_tools',
    description: t('ai.checkboxButton.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxButton.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || false
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.boolean().describe(t('ai.checkboxButton.setValue')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Value set to ${params}` }
        }
      },
      toggle: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxButton.toggle')),
        cb: (instance) => {
          instance.modelValue = !instance.modelValue
          return { type: 'text', text: `Toggled to ${instance.modelValue}` }
        }
      },
      getLabel: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxButton.getLabel')),
        cb: (instance) => {
          const label = instance.label || ''
          return { type: 'text', text: JSON.stringify({ label }) }
        }
      }
    }
  })
