import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getPopoverConfig = () =>
  defineComponentTool({
    name: 'popover_component_tools',
    description: t('ai.popover.description'),
    tools: {
      show: {
        paramsSchema: z.boolean().optional().describe(t('ai.popover.show')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'success' }
        }
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.popover.hide')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      },
      setTitle: {
        paramsSchema: z.string().optional().describe(t('ai.popover.setTitle')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      setContent: {
        paramsSchema: z.string().optional().describe(t('ai.popover.setContent')),
        cb: (instance, value) => {
          if (value) {
            instance.content = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
