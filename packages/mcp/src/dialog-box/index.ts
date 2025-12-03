import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getDialogBoxConfig = () =>
  defineComponentTool({
    name: 'dialog_box_component_tools',
    description: t('ai.dialogBox.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogBox.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'success' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogBox.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      },
      setTitle: {
        paramsSchema: z.string().optional().describe(t('ai.dialogBox.setTitle')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      getVisible: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogBox.getVisible')),
        cb: (instance) => {
          const visible = instance.visible || false
          return { type: 'text', text: JSON.stringify({ visible }) }
        }
      }
    }
  })
