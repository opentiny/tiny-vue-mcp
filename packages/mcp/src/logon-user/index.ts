import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getLogonUserConfig = () =>
  defineComponentTool({
    name: 'logon_user_component_tools',
    description: t('ai.logonUser.description'),
    tools: {
      getUser: {
        paramsSchema: z.boolean().optional().describe(t('ai.logonUser.getUser')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.user || {}) })
      },
      setUser: {
        paramsSchema: z.object({ id: z.string(), username: z.string() }).describe(t('ai.logonUser.setUser')),
        cb: (instance, params) => {
          instance.user = params
          return { type: 'text', text: 'User set' }
        }
      }
    }
  })
