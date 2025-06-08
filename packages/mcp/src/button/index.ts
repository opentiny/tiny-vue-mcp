import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getButtonConfig = () =>
  defineComponentTool({
    name: 'button_component_tools',
    description: t('ai.button.description'),
    tools: {
      triggerClick: {
        paramsSchema: z.boolean().describe(t('ai.button.triggerClick')),
        cb: (instance, value) => {
          instance.handleClick(value)
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
