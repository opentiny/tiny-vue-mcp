import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getSpaceConfig = () =>
  defineComponentTool({
    name: 'space_component_tools',
    description: t('ai.space.description'),
    tools: {
      getDirection: {
        paramsSchema: z.boolean().optional().describe(t('ai.space.getDirection')),
        cb: (instance) => {
          const direction = instance.direction || 'horizontal'
          return { type: 'text', text: JSON.stringify({ direction }) }
        }
      },
      setDirection: {
        paramsSchema: z.enum(['horizontal', 'vertical']).describe(t('ai.space.setDirection')),
        cb: (instance, params) => {
          instance.direction = params
          return { type: 'text', text: `Direction set to ${params}` }
        }
      },
      getSize: {
        paramsSchema: z.boolean().optional().describe(t('ai.space.getSize')),
        cb: (instance) => {
          const size = instance.size || 'medium'
          return { type: 'text', text: JSON.stringify({ size }) }
        }
      },
      setSize: {
        paramsSchema: z.enum(['small', 'medium', 'large']).describe(t('ai.space.setSize')),
        cb: (instance, params) => {
          instance.size = params
          return { type: 'text', text: `Size set to ${params}` }
        }
      }
    }
  })
