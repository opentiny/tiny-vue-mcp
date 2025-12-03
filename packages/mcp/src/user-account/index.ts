import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getUserAccountConfig = () =>
  defineComponentTool({
    name: 'user_account_component_tools',
    description: t('ai.userAccount.description'),
    tools: {
      getAccount: {
        paramsSchema: z.boolean().optional().describe(t('ai.userAccount.getAccount')),
        cb: (instance) => ({ type: 'text', text: instance.account || '' })
      },
      setAccount: {
        paramsSchema: z.string().describe(t('ai.userAccount.setAccount')),
        cb: (instance, params: string) => {
          instance.account = params
          return { type: 'text', text: 'Account set' }
        }
      }
    }
  })
