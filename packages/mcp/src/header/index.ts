import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getHeaderConfig = () =>
  defineComponentTool({
    name: 'header_component_tools',
    description: t('ai.header.description'),
    tools: {
      getTitle: {
        paramsSchema: z.boolean().optional().describe(t('ai.header.getTitle')),
        cb: (instance) => {
          const title = instance.title || ''
          return { type: 'text', text: JSON.stringify({ title }) }
        }
      },
      setTitle: {
        paramsSchema: z.string().optional().describe(t('ai.header.setTitle')),
        cb: (instance, value) => {
          if (value) {
            instance.title = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
