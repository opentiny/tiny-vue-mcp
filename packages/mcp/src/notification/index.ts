import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getNotificationConfig = () =>
  defineComponentTool({
    name: 'notification_component_tools',
    description: t('ai.notification.description'),
    tools: {
      show: {
        paramsSchema: z.object({
          title: z.string().optional(),
          message: z.string().optional(),
          type: z.string().optional()
        }).optional().describe(t('ai.notification.show')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value.title || ''
            instance.message = value.message || ''
            instance.type = value.type || 'info'
          }
          return { type: 'text', text: 'success' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.notification.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
