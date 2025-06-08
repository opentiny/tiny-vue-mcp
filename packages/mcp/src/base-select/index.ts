import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getBaseSelectConfig = () =>
  defineComponentTool({
    name: 'base_select_component_tools',
    description: t('ai.baseSelect.description'),
    tools: {
      openMenu: {
        paramsSchema: z.boolean().describe(t('ai.baseSelect.openMenu')),
        cb: (instance, value) => {
          instance.state.visible = value
          return { type: 'text', text: 'success' }
        }
      },
      selectByLabel: {
        paramsSchema: z.string().describe(t('ai.baseSelect.selectByLabel')),

        cb: (instance, value) => {
          const options = instance.state.cachedOptions || []
          const targetOption = options.find((option) => option.label === value)
          if (targetOption) {
            instance.updateModelValue(targetOption.value)
            return { type: 'text', text: 'success' }
          } else {
            return { type: 'text', text: `Option with label "${value}" not found.` }
          }
        }
      }
    }
  })
