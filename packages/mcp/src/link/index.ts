import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getLinkConfig = () =>
  defineComponentTool({
    name: 'link_component_tools',
    description: t('ai.link.description'),
    tools: {
      getHref: {
        paramsSchema: z.boolean().optional().describe(t('ai.link.getHref')),
        cb: (instance) => {
          const href = instance.href || ''
          return { type: 'text', text: JSON.stringify({ href }) }
        }
      },
      setHref: {
        paramsSchema: z.string().optional().describe(t('ai.link.setHref')),
        cb: (instance, value) => {
          if (value) {
            instance.href = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
