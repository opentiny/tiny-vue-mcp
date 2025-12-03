import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getScrollBarConfig = () =>
  defineComponentTool({
    name: 'scroll_bar_component_tools',
    description: t('ai.scrollBar.description'),
    tools: {
      getPosition: {
        paramsSchema: z.boolean().optional().describe(t('ai.scrollBar.getPosition')),
        cb: (instance) => {
          const position = instance.position || 0
          return { type: 'text', text: JSON.stringify({ position }) }
        }
      },
      setPosition: {
        paramsSchema: z.number().min(0).max(100).describe(t('ai.scrollBar.setPosition')),
        cb: (instance, params) => {
          instance.position = params
          return { type: 'text', text: `Position set to ${params}%` }
        }
      },
      getSize: {
        paramsSchema: z.boolean().optional().describe(t('ai.scrollBar.getSize')),
        cb: (instance) => {
          const size = instance.size || 0
          return { type: 'text', text: JSON.stringify({ size }) }
        }
      },
      scroll: {
        paramsSchema: z.object({ direction: z.enum(['up', 'down']), distance: z.number() }).describe(t('ai.scrollBar.scroll')),
        cb: (instance, params) => {
          return { type: 'text', text: `Scrolled ${params.direction} by ${params.distance}px` }
        }
      }
    }
  })
