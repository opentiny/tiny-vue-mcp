import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getRecycleScrollerConfig = () =>
  defineComponentTool({
    name: 'recycle_scroller_component_tools',
    description: t('ai.recycleScroller.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.recycleScroller.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ items: items.length, total: items.length }) }
        }
      },
      scrollToItem: {
        paramsSchema: z.number().describe(t('ai.recycleScroller.scrollToItem')),
        cb: (instance, params) => {
          return { type: 'text', text: `Scrolled to item ${params}` }
        }
      },
      reset: {
        paramsSchema: z.boolean().optional().describe(t('ai.recycleScroller.reset')),
        cb: (instance) => {
          return { type: 'text', text: 'Scroller reset' }
        }
      },
      getFirstVisibleIndex: {
        paramsSchema: z.boolean().optional().describe(t('ai.recycleScroller.getFirstVisibleIndex')),
        cb: (instance) => {
          const index = instance.firstVisibleIndex || 0
          return { type: 'text', text: JSON.stringify({ index }) }
        }
      }
    }
  })
