import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getLogoutConfig = () =>
  defineComponentTool({
    name: 'logout_component_tools',
    description: t('ai.logout.description'),
    tools: {
      logout: {
        paramsSchema: z.boolean().optional().describe(t('ai.logout.logout')),
        cb: (instance) => ({ type: 'text', text: 'Logout successful' })
      }
    }
  })
