import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getPopeditorConfig = () =>
  defineComponentTool({
    name: 'popeditor_component_tools',
    description: t('ai.popeditor.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.popeditor.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Editor opened' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.popeditor.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Editor closed' }
        }
      }
    }
  })
