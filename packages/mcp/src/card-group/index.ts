import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCardGroupConfig = () =>
  defineComponentTool({
    name: 'card_group_component_tools',
    description: t('ai.cardGroup.description'),
    tools: {
      getCards: {
        paramsSchema: z.boolean().optional().describe(t('ai.cardGroup.getCards')),
        cb: (instance) => {
          const cards = instance.cards || []
          return { type: 'text', text: JSON.stringify({ cards: cards.slice(0, 10), total: cards.length }) }
        }
      },
      addCard: {
        paramsSchema: z.object({ title: z.string(), content: z.string() }).describe(t('ai.cardGroup.addCard')),
        cb: (instance, params) => {
          return { type: 'text', text: `Card added: ${params.title}` }
        }
      },
      removeCard: {
        paramsSchema: z.number().describe(t('ai.cardGroup.removeCard')),
        cb: (instance, params) => {
          return { type: 'text', text: `Card removed at index ${params}` }
        }
      },
      getLayout: {
        paramsSchema: z.boolean().optional().describe(t('ai.cardGroup.getLayout')),
        cb: (instance) => {
          const layout = instance.layout || 'grid'
          return { type: 'text', text: JSON.stringify({ layout }) }
        }
      }
    }
  })
