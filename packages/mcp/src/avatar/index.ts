import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getAvatarConfig = () =>
  defineComponentTool({
    name: 'avatar_component_tools',
    description: t('ai.avatar.description'),
    tools: {
      getSrc: {
        paramsSchema: z.boolean().optional().describe(t('ai.avatar.getSrc')),
        cb: (instance) => {
          const src = instance.src || ''
          return { type: 'text', text: JSON.stringify({ src }) }
        }
      },
      setSrc: {
        paramsSchema: z.string().optional().describe(t('ai.avatar.setSrc')),
        cb: (instance, value) => {
          if (value) {
            instance.src = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
