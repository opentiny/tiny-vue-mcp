import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCardTemplateConfig = () =>
  defineComponentTool({
    name: 'card_template_component_tools',
    description: t('ai.cardTemplate.description'),
    tools: {
      getTemplate: {
        paramsSchema: z.boolean().optional().describe(t('ai.cardTemplate.getTemplate')),
        cb: (instance) => {
          const template = instance.template || 'default'
          return { type: 'text', text: JSON.stringify({ template }) }
        }
      },
      setTemplate: {
        paramsSchema: z.string().describe(t('ai.cardTemplate.setTemplate')),
        cb: (instance, params) => {
          instance.template = params
          return { type: 'text', text: `Template set to ${params}` }
        }
      },
      getData: {
        paramsSchema: z.boolean().optional().describe(t('ai.cardTemplate.getData')),
        cb: (instance) => {
          const data = instance.data || {}
          return { type: 'text', text: JSON.stringify({ data }) }
        }
      },
      render: {
        paramsSchema: z.object({ data: z.unknown() }).describe(t('ai.cardTemplate.render')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Template rendered successfully' }
        }
      }
    }
  })
