import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCardConfig = () =>
  defineComponentTool({
    name: 'card_component_tools',
    description: t('ai.card.description'),
    tools: {
      getTitle: {
        paramsSchema: z.boolean().optional().describe(t('ai.card.getTitle')),
        cb: (instance) => {
          const title = instance.title || ''
          return { type: 'text', text: JSON.stringify({ title }) }
        }
      },
      setTitle: {
        paramsSchema: z.string().describe(t('ai.card.setTitle')),
        cb: (instance, params) => {
          instance.title = params
          return { type: 'text', text: `Title set to ${params}` }
        }
      },
      getContent: {
        paramsSchema: z.boolean().optional().describe(t('ai.card.getContent')),
        cb: (instance) => {
          const content = instance.content || ''
          return { type: 'text', text: JSON.stringify({ content }) }
        }
      },
      setContent: {
        paramsSchema: z.string().describe(t('ai.card.setContent')),
        cb: (instance, params) => {
          instance.content = params
          return { type: 'text', text: 'Content updated' }
        }
      }
    }
  })
