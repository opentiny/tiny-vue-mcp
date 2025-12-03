import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getRolesConfig = () =>
  defineComponentTool({
    name: 'roles_component_tools',
    description: t('ai.roles.description'),
    tools: {
      getSelected: {
        paramsSchema: z.boolean().optional().describe(t('ai.roles.getSelected')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.selected || []) })
      },
      setSelected: {
        paramsSchema: z.array(z.string()).describe(t('ai.roles.setSelected')),
        cb: (instance, params) => {
          instance.selected = params
          return { type: 'text', text: 'Roles set' }
        }
      }
    }
  })
