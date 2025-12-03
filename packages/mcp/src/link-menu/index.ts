import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getLinkMenuConfig = () =>
  defineComponentTool({
    name: 'link_menu_component_tools',
    description: t('ai.linkMenu.description'),
    tools: {
      getItems: {
        paramsSchema: z.boolean().optional().describe(t('ai.linkMenu.getItems')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.items || []) })
      },
      addItem: {
        paramsSchema: z.object({ label: z.string(), url: z.string() }).describe(t('ai.linkMenu.addItem')),
        cb: (instance, params) => {
          instance.items = instance.items || []
          instance.items.push(params)
          return { type: 'text', text: 'Link added' }
        }
      }
    }
  })
