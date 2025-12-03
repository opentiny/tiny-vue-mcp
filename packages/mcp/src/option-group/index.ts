import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getOptionGroupConfig = () =>
  defineComponentTool({
    name: 'option_group_component_tools',
    description: t('ai.optionGroup.description'),
    tools: {
      getLabel: {
        paramsSchema: z.boolean().optional().describe(t('ai.optionGroup.getLabel')),
        cb: (instance) => {
          const label = instance.label || ''
          return { type: 'text', text: JSON.stringify({ label }) }
        }
      },
      setLabel: {
        paramsSchema: z.string().describe(t('ai.optionGroup.setLabel')),
        cb: (instance, params) => {
          instance.label = params
          return { type: 'text', text: `Label set to ${params}` }
        }
      },
      getOptions: {
        paramsSchema: z.boolean().optional().describe(t('ai.optionGroup.getOptions')),
        cb: (instance) => {
          const options = instance.options || []
          return { type: 'text', text: JSON.stringify({ options, count: options.length }) }
        }
      },
      addOption: {
        paramsSchema: z.object({ label: z.string(), value: z.unknown() }).describe(t('ai.optionGroup.addOption')),
        cb: (instance, params) => {
          return { type: 'text', text: `Option added: ${params.label}` }
        }
      }
    }
  })
