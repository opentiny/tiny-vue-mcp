import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getSplitConfig = () =>
  defineComponentTool({
    name: 'split_component_tools',
    description: t('ai.split.description'),
    tools: {
      getDividerPosition: {
        paramsSchema: z.boolean().optional().describe(t('ai.split.getDividerPosition')),
        cb: (instance) => {
          const position = instance.dividerPosition || 50
          return { type: 'text', text: JSON.stringify({ position }) }
        }
      },
      setDividerPosition: {
        paramsSchema: z.number().min(0).max(100).describe(t('ai.split.setDividerPosition')),
        cb: (instance, params) => {
          instance.dividerPosition = params
          return { type: 'text', text: `Divider position set to ${params}%` }
        }
      },
      getMode: {
        paramsSchema: z.boolean().optional().describe(t('ai.split.getMode')),
        cb: (instance) => {
          const mode = instance.mode || 'horizontal'
          return { type: 'text', text: JSON.stringify({ mode }) }
        }
      },
      setMode: {
        paramsSchema: z.enum(['horizontal', 'vertical']).describe(t('ai.split.setMode')),
        cb: (instance, params) => {
          instance.mode = params
          return { type: 'text', text: `Mode set to ${params}` }
        }
      }
    }
  })
