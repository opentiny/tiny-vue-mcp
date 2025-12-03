import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getRadioConfig = () =>
  defineComponentTool({
    name: 'radio_component_tools',
    description: t('ai.radio.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.radio.getValue')),
        cb: (instance) => {
          const value = instance.modelValue
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.string().optional().describe(t('ai.radio.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      select: {
        paramsSchema: z.boolean().optional().describe(t('ai.radio.select')),
        cb: (instance) => {
          instance.modelValue = instance.label
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
