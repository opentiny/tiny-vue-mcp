import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCheckboxGroupConfig = () =>
  defineComponentTool({
    name: 'checkbox_group_component_tools',
    description: t('ai.checkboxGroup.description'),
    tools: {
      getValues: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxGroup.getValues')),
        cb: (instance) => {
          const values = instance.modelValue || []
          return { type: 'text', text: JSON.stringify({ values, count: values.length }) }
        }
      },
      setValues: {
        paramsSchema: z.array(z.unknown()).describe(t('ai.checkboxGroup.setValues')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Values set to ${params.length} items` }
        }
      },
      selectAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxGroup.selectAll')),
        cb: (instance) => {
          return { type: 'text', text: 'All items selected' }
        }
      },
      clearSelection: {
        paramsSchema: z.boolean().optional().describe(t('ai.checkboxGroup.clearSelection')),
        cb: (instance) => {
          instance.modelValue = []
          return { type: 'text', text: 'Selection cleared' }
        }
      }
    }
  })
