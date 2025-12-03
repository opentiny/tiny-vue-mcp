import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getMilestoneConfig = () =>
  defineComponentTool({
    name: 'milestone_component_tools',
    description: t('ai.milestone.description'),
    tools: {
      getCurrent: {
        paramsSchema: z.boolean().optional().describe(t('ai.milestone.getCurrent')),
        cb: (instance) => ({ type: 'text', text: String(instance.current || 0) })
      },
      setCurrent: {
        paramsSchema: z.number().describe(t('ai.milestone.setCurrent')),
        cb: (instance, params: number) => {
          instance.current = params
          return { type: 'text', text: 'Milestone updated' }
        }
      }
    }
  })
