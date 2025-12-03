import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getFooterConfig = () =>
  defineComponentTool({
    name: 'footer_component_tools',
    description: t('ai.footer.description'),
    tools: {
      getContent: {
        paramsSchema: z.boolean().optional().describe(t('ai.footer.getContent')),
        cb: (instance) => {
          const content = instance.content || ''
          return { type: 'text', text: JSON.stringify({ content }) }
        }
      },
      setContent: {
        paramsSchema: z.string().optional().describe(t('ai.footer.setContent')),
        cb: (instance, value) => {
          if (value) {
            instance.content = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
