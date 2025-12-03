import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getSelectDropdownConfig = () =>
  defineComponentTool({
    name: 'select_dropdown_component_tools',
    description: t('ai.selectDropdown.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.selectDropdown.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Dropdown opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.selectDropdown.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Dropdown closed' }
        }
      },
      getOptions: {
        paramsSchema: z.boolean().optional().describe(t('ai.selectDropdown.getOptions')),
        cb: (instance) => {
          const options = instance.options || []
          return { type: 'text', text: JSON.stringify({ options, count: options.length }) }
        }
      },
      selectOption: {
        paramsSchema: z.unknown().describe(t('ai.selectDropdown.selectOption')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Option selected' }
        }
      }
    }
  })
