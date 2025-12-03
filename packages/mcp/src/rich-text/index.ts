import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getRichTextConfig = () =>
  defineComponentTool({
    name: 'rich_text_component_tools',
    description: t('ai.richText.description'),
    tools: {
      getContent: {
        paramsSchema: z.enum(['html', 'text']).optional().describe(t('ai.richText.getContent')),
        cb: (instance, params) => {
          const format = params || 'html'
          const content = instance.content || ''
          return { type: 'text', text: JSON.stringify({ content, format }) }
        }
      },
      setContent: {
        paramsSchema: z.string().describe(t('ai.richText.setContent')),
        cb: (instance, params) => {
          instance.content = params
          return { type: 'text', text: 'Content updated' }
        }
      },
      getText: {
        paramsSchema: z.boolean().optional().describe(t('ai.richText.getText')),
        cb: (instance) => {
          const text = instance.text || ''
          return { type: 'text', text: JSON.stringify({ text }) }
        }
      },
      getLength: {
        paramsSchema: z.boolean().optional().describe(t('ai.richText.getLength')),
        cb: (instance) => {
          const content = instance.content || ''
          return { type: 'text', text: JSON.stringify({ length: content.length }) }
        }
      }
    }
  })
