import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getAlertConfig = () =>
  defineComponentTool({
    name: 'alert_component_tools',
    description: t('ai.alert.description'),
    tools: {
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.alert.close')),
        cb: (instance) => {
          instance.closed = true
          return { type: 'text', text: 'success' }
        }
      },
      setType: {
        paramsSchema: z.string().optional().describe(t('ai.alert.setType')),
        cb: (instance, value) => {
          if (value) {
            instance.type = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      setTitle: {
        paramsSchema: z.string().optional().describe(t('ai.alert.setTitle')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
