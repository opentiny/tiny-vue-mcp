import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getUserLinkConfig = () =>
  defineComponentTool({
    name: 'user_link_component_tools',
    description: t('ai.userLink.description'),
    tools: {
      getLink: {
        paramsSchema: z.boolean().optional().describe(t('ai.userLink.getLink')),
        cb: (instance) => ({ type: 'text', text: instance.link || '' })
      },
      setLink: {
        paramsSchema: z.string().describe(t('ai.userLink.setLink')),
        cb: (instance, params: string) => {
          instance.link = params
          return { type: 'text', text: 'Link set' }
        }
      }
    }
  })
