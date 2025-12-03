import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFloatbarConfig = () =>
  defineComponentTool({
    name: 'floatbar_component_tools',
    description: t('ai.floatbar.description'),
    tools: {
      position: {
        paramsSchema: z.object({ x: z.number(), y: z.number() }).describe(t('ai.floatbar.position')),
        cb: (instance, params) => {
          instance.x = params.x
          instance.y = params.y
          return { type: 'text', text: 'Position updated' }
        }
      },
      getPosition: {
        paramsSchema: z.boolean().optional().describe(t('ai.floatbar.getPosition')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify({ x: instance.x || 0, y: instance.y || 0 }) })
      }
    }
  })
