import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getModalConfig = () =>
  defineComponentTool({
    name: 'modal_component_tools',
    description: t('ai.modal.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.modal.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'success' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.modal.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      },
      setTitle: {
        paramsSchema: z.string().optional().describe(t('ai.modal.setTitle')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      setContent: {
        paramsSchema: z.string().optional().describe(t('ai.modal.setContent')),
        cb: (instance, value) => {
          if (value) {
            instance.content = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
