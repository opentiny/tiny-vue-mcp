import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFloatButtonConfig = () =>
  defineComponentTool({
    name: 'float_button_component_tools',
    description: t('ai.floatButton.description'),
    tools: {
      show: {
        paramsSchema: z.boolean().optional().describe(t('ai.floatButton.show')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Button shown' }
        }
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.floatButton.hide')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Button hidden' }
        }
      },
      click: {
        paramsSchema: z.boolean().optional().describe(t('ai.floatButton.click')),
        cb: (instance) => ({ type: 'text', text: 'Button clicked' })
      }
    }
  })
