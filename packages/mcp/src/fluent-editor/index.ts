import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFluentEditorConfig = () =>
  defineComponentTool({
    name: 'fluent_editor_component_tools',
    description: t('ai.fluentEditor.description'),
    tools: {
      getContent: {
        paramsSchema: z.boolean().optional().describe(t('ai.fluentEditor.getContent')),
        cb: (instance) => ({ type: 'text', text: instance.content || '' })
      },
      setContent: {
        paramsSchema: z.string().describe(t('ai.fluentEditor.setContent')),
        cb: (instance, params: string) => {
          instance.content = params
          return { type: 'text', text: 'Content updated' }
        }
      }
    }
  })
