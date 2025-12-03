import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getStickyConfig = () =>
  defineComponentTool({
    name: 'sticky_component_tools',
    description: t('ai.sticky.description'),
    tools: {
      getOffset: {
        paramsSchema: z.boolean().optional().describe(t('ai.sticky.getOffset')),
        cb: (instance) => {
          const offset = instance.offset || 0
          return { type: 'text', text: JSON.stringify({ offset }) }
        }
      },
      setOffset: {
        paramsSchema: z.number().describe(t('ai.sticky.setOffset')),
        cb: (instance, params) => {
          instance.offset = params
          return { type: 'text', text: `Offset set to ${params}px` }
        }
      },
      isSticky: {
        paramsSchema: z.boolean().optional().describe(t('ai.sticky.isSticky')),
        cb: (instance) => {
          const sticky = instance.isSticky || false
          return { type: 'text', text: JSON.stringify({ sticky }) }
        }
      },
      getZIndex: {
        paramsSchema: z.boolean().optional().describe(t('ai.sticky.getZIndex')),
        cb: (instance) => {
          const zIndex = instance.zIndex || 1000
          return { type: 'text', text: JSON.stringify({ zIndex }) }
        }
      }
    }
  })
