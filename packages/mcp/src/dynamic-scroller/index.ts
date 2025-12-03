import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDynamicScrollerConfig = () =>
  defineComponentTool({
    name: 'dynamic_scroller_component_tools',
    description: t('ai.dynamicScroller.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.dynamicScroller.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ items: items.length, total: items.length }) }
        }
      },
      scrollToItem: {
        paramsSchema: z.number().describe(t('ai.dynamicScroller.scrollToItem')),
        cb: (instance, params) => {
          return { type: 'text', text: `Scrolled to item ${params}` }
        }
      },
      refresh: {
        paramsSchema: z.boolean().optional().describe(t('ai.dynamicScroller.refresh')),
        cb: (instance) => {
          return { type: 'text', text: 'Scroller refreshed' }
        }
      },
      getScrollPosition: {
        paramsSchema: z.boolean().optional().describe(t('ai.dynamicScroller.getScrollPosition')),
        cb: (instance) => {
          const position = instance.scrollPosition || 0
          return { type: 'text', text: JSON.stringify({ position }) }
        }
      }
    }
  })
