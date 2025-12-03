import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getRichTextEditorConfig = () =>
  defineComponentTool({
    name: 'rich_text_editor_component_tools',
    description: t('ai.richTextEditor.description'),
    tools: {
      getContent: {
        paramsSchema: z.enum(['html', 'text', 'markdown']).optional().describe(t('ai.richTextEditor.getContent')),
        cb: (instance, params) => {
          const format = params || 'html'
          const content = instance.modelValue || instance.content || ''
          return { type: 'text', text: JSON.stringify({ content, format }) }
        }
      },
      setContent: {
        paramsSchema: z.string().describe(t('ai.richTextEditor.setContent')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: 'Content updated' }
        }
      },
      insertText: {
        paramsSchema: z.string().describe(t('ai.richTextEditor.insertText')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Text inserted successfully' }
        }
      },
      clearContent: {
        paramsSchema: z.boolean().optional().describe(t('ai.richTextEditor.clearContent')),
        cb: (instance) => {
          instance.modelValue = ''
          return { type: 'text', text: 'Content cleared' }
        }
      }
    }
  })
