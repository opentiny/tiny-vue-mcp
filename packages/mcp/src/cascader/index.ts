import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getCascaderConfig = () =>
  defineComponentTool({
    name: 'cascader_component_tools',
    description: t('ai.cascader.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.cascader.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || []
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.array(z.any()).optional().describe(t('ai.cascader.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.cascader.clear')),
        cb: (instance) => {
          instance.modelValue = []
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
