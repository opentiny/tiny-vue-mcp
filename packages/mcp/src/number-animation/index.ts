import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getNumberAnimationConfig = () =>
  defineComponentTool({
    name: 'number_animation_component_tools',
    description: t('ai.numberAnimation.description'),
    tools: {
      start: {
        paramsSchema: z.object({ from: z.number(), to: z.number() }).describe(t('ai.numberAnimation.start')),
        cb: (instance, params) => ({ type: 'text', text: 'Animation started' })
      },
      stop: {
        paramsSchema: z.boolean().optional().describe(t('ai.numberAnimation.stop')),
        cb: (instance) => ({ type: 'text', text: 'Animation stopped' })
      }
    }
  })
