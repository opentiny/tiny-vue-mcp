import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getUserConfig = () =>
  defineComponentTool({
    name: 'user_component_tools',
    description: t('ai.user.description'),
    tools: {
      getUser: {
        paramsSchema: z.boolean().optional().describe(t('ai.user.getUser')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.user || {}) })
      },
      setUser: {
        paramsSchema: z.object({ id: z.string(), name: z.string() }).describe(t('ai.user.setUser')),
        cb: (instance, params) => {
          instance.user = params
          return { type: 'text', text: 'User set' }
        }
      }
    }
  })
