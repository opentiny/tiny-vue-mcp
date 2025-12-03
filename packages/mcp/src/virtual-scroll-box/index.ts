import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getVirtualScrollBoxConfig = () =>
  defineComponentTool({
    name: 'virtual_scroll_box_component_tools',
    description: t('ai.virtualScrollBox.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.virtualScrollBox.getItems')),
        cb: (instance) => {
          const items = instance.items || []
          return { type: 'text', text: JSON.stringify({ count: items.length, total: items.length }) }
        }
      },
      scrollTo: {
        paramsSchema: z.number().describe(t('ai.virtualScrollBox.scrollTo')),
        cb: (instance, params) => {
          return { type: 'text', text: `Scrolled to position ${params}` }
        }
      },
      getViewportHeight: {
        paramsSchema: z.boolean().optional().describe(t('ai.virtualScrollBox.getViewportHeight')),
        cb: (instance) => {
          const height = instance.viewportHeight || 0
          return { type: 'text', text: JSON.stringify({ height }) }
        }
      },
      setViewportHeight: {
        paramsSchema: z.number().describe(t('ai.virtualScrollBox.setViewportHeight')),
        cb: (instance, params) => {
          instance.viewportHeight = params
          return { type: 'text', text: `Viewport height set to ${params}` }
        }
      }
    }
  })
