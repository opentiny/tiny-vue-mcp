import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTooltipConfig = () =>
  defineComponentTool({
    name: 'tooltip_component_tools',
    description: t('ai.tooltip.description'),
    tools: {
      show: {
        paramsSchema: z.boolean().optional().describe(t('ai.tooltip.show')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'success' }
        }
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.tooltip.hide')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      },
      setContent: {
        paramsSchema: z.string().optional().describe(t('ai.tooltip.setContent')),
        cb: (instance, value) => {
          if (value) {
            instance.content = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
