import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTagConfig = () =>
  defineComponentTool({
    name: 'tag_component_tools',
    description: t('ai.tag.description'),
    tools: {
      getType: {
        paramsSchema: z.boolean().optional().describe(t('ai.tag.getType')),
        cb: (instance) => {
          const type = instance.type || 'info'
          return { type: 'text', text: JSON.stringify({ type }) }
        }
      },
      setType: {
        paramsSchema: z.string().optional().describe(t('ai.tag.setType')),
        cb: (instance, value) => {
          if (value) {
            instance.type = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.tag.close')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
