import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFullscreenConfig = () =>
  defineComponentTool({
    name: 'fullscreen_component_tools',
    description: t('ai.fullscreen.description'),
    tools: {
      enter: {
        paramsSchema: z.boolean().optional().describe(t('ai.fullscreen.enter')),
        cb: (instance) => ({ type: 'text', text: 'Fullscreen entered' })
      },
      exit: {
        paramsSchema: z.boolean().optional().describe(t('ai.fullscreen.exit')),
        cb: (instance) => ({ type: 'text', text: 'Fullscreen exited' })
      }
    }
  })
