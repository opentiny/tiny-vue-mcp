import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSwitchConfig = () =>
  defineComponentTool({
    name: 'switch_component_tools',
    description: t('ai.switch.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.switch.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || false
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.switch.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      toggle: {
        paramsSchema: z.boolean().optional().describe(t('ai.switch.toggle')),
        cb: (instance) => {
          instance.modelValue = !instance.modelValue
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
