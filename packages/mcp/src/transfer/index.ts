import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTransferConfig = () =>
  defineComponentTool({
    name: 'transfer_component_tools',
    description: t('ai.transfer.description'),
    tools: {
      getLeftItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.transfer.getLeftItems')),
        cb: (instance) => {
          const items = instance.data || instance.leftItems || []
          return { type: 'text', text: JSON.stringify({ items: items.slice(0, 10), total: items.length }) }
        }
      },
      getRightItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.transfer.getRightItems')),
        cb: (instance) => {
          const items = instance.modelValue || instance.rightItems || []
          return { type: 'text', text: JSON.stringify({ items: items.slice(0, 10), total: items.length }) }
        }
      },
      move: {
        paramsSchema: z.object({ direction: z.enum(['left', 'right']), items: z.array(z.unknown()) }).describe(t('ai.transfer.move')),
        cb: (instance, params) => {
          const direction = params.direction || 'right'
          return { type: 'text', text: `Successfully moved ${params.items?.length || 0} items to ${direction}` }
        }
      }
    }
  })
