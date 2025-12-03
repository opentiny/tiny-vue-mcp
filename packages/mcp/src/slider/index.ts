import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSliderConfig = () =>
  defineComponentTool({
    name: 'slider_component_tools',
    description: t('ai.slider.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.slider.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || 0
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.number().optional().describe(t('ai.slider.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      reset: {
        paramsSchema: z.boolean().optional().describe(t('ai.slider.reset')),
        cb: (instance) => {
          instance.modelValue = instance.min || 0
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
