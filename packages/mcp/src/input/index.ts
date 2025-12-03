import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getInputConfig = () =>
  defineComponentTool({
    name: 'input_component_tools',
    description: t('ai.input.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.input.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || ''
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.string().optional().describe(t('ai.input.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.input.clear')),
        cb: (instance) => {
          instance.modelValue = ''
          return { type: 'text', text: 'success' }
        }
      },
      focus: {
        paramsSchema: z.boolean().optional().describe(t('ai.input.focus')),
        cb: (instance) => {
          instance.focus?.()
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
