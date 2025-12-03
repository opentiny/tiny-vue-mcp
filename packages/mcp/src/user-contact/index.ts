import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getUserContactConfig = () =>
  defineComponentTool({
    name: 'user_contact_component_tools',
    description: t('ai.userContact.description'),
    tools: {
      getContact: {
        paramsSchema: z.boolean().optional().describe(t('ai.userContact.getContact')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.contact || {}) })
      },
      setContact: {
        paramsSchema: z.object({ phone: z.string().optional(), email: z.string().optional() }).describe(t('ai.userContact.setContact')),
        cb: (instance, params) => {
          instance.contact = params
          return { type: 'text', text: 'Contact set' }
        }
      }
    }
  })
