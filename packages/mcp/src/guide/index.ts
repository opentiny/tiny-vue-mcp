import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getGuideConfig = () =>
  defineComponentTool({
    name: 'guide_component_tools',
    description: t('ai.guide.description'),
    tools: {
      start: {
        paramsSchema: z.boolean().optional().describe(t('ai.guide.start')),
        cb: (instance) => {
          instance.started = true
          return { type: 'text', text: 'Guide started' }
        }
      },
      next: {
        paramsSchema: z.boolean().optional().describe(t('ai.guide.next')),
        cb: (instance) => ({ type: 'text', text: 'Moved to next step' })
      }
    }
  })
