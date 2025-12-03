import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDialogSelectConfig = () =>
  defineComponentTool({
    name: 'dialog_select_component_tools',
    description: t('ai.dialogSelect.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogSelect.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Dialog opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogSelect.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Dialog closed' }
        }
      },
      getSelected: {
        paramsSchema: z.boolean().optional().describe(t('ai.dialogSelect.getSelected')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.selected || []) })
      }
    }
  })
