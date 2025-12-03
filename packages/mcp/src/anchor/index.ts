import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getAnchorConfig = () =>
  defineComponentTool({
    name: 'anchor_component_tools',
    description: t('ai.anchor.description'),
    tools: {
      goTo: {
        paramsSchema: z.string().describe(t('ai.anchor.goTo')),
        cb: (instance, params: string) => {
          // assume instance has method to scroll
          return { type: 'text', text: `Navigated to ${params}` }
        }
      },
      getCurrent: {
        paramsSchema: z.boolean().optional().describe(t('ai.anchor.getCurrent')),
        cb: (instance) => ({ type: 'text', text: String(instance.current || '') })
      }
    }
  })
