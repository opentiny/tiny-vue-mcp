import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDropdownItemConfig = () =>
  defineComponentTool({
    name: 'dropdown_item_component_tools',
    description: t('ai.dropdownItem.description'),
    tools: {
      getLabel: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdownItem.getLabel')),
        cb: (instance) => {
          const label = instance.label || ''
          return { type: 'text', text: JSON.stringify({ label }) }
        }
      },
      setLabel: {
        paramsSchema: z.string().describe(t('ai.dropdownItem.setLabel')),
        cb: (instance, params) => {
          instance.label = params
          return { type: 'text', text: `Label set to ${params}` }
        }
      },
      isDisabled: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropdownItem.isDisabled')),
        cb: (instance) => {
          const disabled = instance.disabled || false
          return { type: 'text', text: JSON.stringify({ disabled }) }
        }
      },
      setDisabled: {
        paramsSchema: z.boolean().describe(t('ai.dropdownItem.setDisabled')),
        cb: (instance, params) => {
          instance.disabled = params
          return { type: 'text', text: `Item ${params ? 'disabled' : 'enabled'}` }
        }
      }
    }
  })
