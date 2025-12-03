import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getMessageBoxConfig = () =>
  defineComponentTool({
    name: 'message_box_component_tools',
    description: t('ai.messageBox.description'),
    tools: {
      show: {
        paramsSchema: z.object({
          title: z.string().optional(),
          message: z.string().optional(),
          type: z.string().optional()
        }).optional().describe(t('ai.messageBox.show')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value.title || ''
            instance.message = value.message || ''
            instance.type = value.type || 'warning'
          }
          return { type: 'text', text: 'success' }
        }
      },
      confirm: {
        paramsSchema: z.boolean().optional().describe(t('ai.messageBox.confirm')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'confirmed' }
        }
      },
      cancel: {
        paramsSchema: z.boolean().optional().describe(t('ai.messageBox.cancel')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'cancelled' }
        }
      }
    }
  })
