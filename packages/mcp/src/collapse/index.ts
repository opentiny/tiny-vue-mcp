import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getCollapseConfig = () =>
  defineComponentTool({
    name: 'collapse_component_tools',
    description: t('ai.collapse.description'),
    tools: {
      getActiveNames: {
        paramsSchema: z.boolean().optional().describe(t('ai.collapse.getActiveNames')),
        cb: (instance) => {
          const activeNames = instance.modelValue || instance.activeNames || []
          return { type: 'text', text: JSON.stringify({ activeNames }) }
        }
      },
      setActiveNames: {
        paramsSchema: z.array(z.string()).optional().describe(t('ai.collapse.setActiveNames')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      expand: {
        paramsSchema: z.string().optional().describe(t('ai.collapse.expand')),
        cb: (instance, value) => {
          const activeNames = instance.modelValue || []
          if (value && !activeNames.includes(value)) {
            instance.modelValue = [...activeNames, value]
          }
          return { type: 'text', text: 'success' }
        }
      },
      collapse: {
        paramsSchema: z.string().optional().describe(t('ai.collapse.collapse')),
        cb: (instance, value) => {
          const activeNames = instance.modelValue || []
          instance.modelValue = activeNames.filter((name: string) => name !== value)
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
