import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getMessageConfig = () =>
  defineComponentTool({
    name: 'message_component_tools',
    description: t('ai.message.description'),
    tools: {
      show: {
        paramsSchema: z.object({
          message: z.string().optional(),
          type: z.string().optional()
        }).optional().describe(t('ai.message.show')),
        cb: (instance, value) => {
          if (value) {
            instance.message = value.message || ''
            instance.type = value.type || 'info'
          }
          return { type: 'text', text: 'success' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.message.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
