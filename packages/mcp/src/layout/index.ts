import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getLayoutConfig = () =>
  defineComponentTool({
    name: 'layout_component_tools',
    description: t('ai.layout.description'),
    tools: {
      getMode: {
        paramsSchema: z.boolean().optional().describe(t('ai.layout.getMode')),
        cb: (instance) => {
          const mode = instance.mode || 'vertical'
          return { type: 'text', text: JSON.stringify({ mode }) }
        }
      },
      setMode: {
        paramsSchema: z.string().optional().describe(t('ai.layout.setMode')),
        cb: (instance, value) => {
          if (value) {
            instance.mode = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
