import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getNumericConfig = () =>
  defineComponentTool({
    name: 'numeric_component_tools',
    description: t('ai.numeric.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.numeric.getValue')),
        cb: (instance) => ({ type: 'text', text: String(instance.value || 0) })
      },
      setValue: {
        paramsSchema: z.number().describe(t('ai.numeric.setValue')),
        cb: (instance, params: number) => {
          instance.value = params
          return { type: 'text', text: 'Value set' }
        }
      }
    }
  })
