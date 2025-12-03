import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTimeLineConfig = () =>
  defineComponentTool({
    name: 'time_line_component_tools',
    description: t('ai.timeLine.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.timeLine.getItems')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.items || []) })
      },
      addItem: {
        paramsSchema: z.object({ time: z.string(), content: z.string() }).describe(t('ai.timeLine.addItem')),
        cb: (instance, params) => {
          instance.items = instance.items || []
          instance.items.push(params)
          return { type: 'text', text: 'Timeline item added' }
        }
      }
    }
  })
