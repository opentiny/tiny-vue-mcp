import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDropRolesConfig = () =>
  defineComponentTool({
    name: 'drop_roles_component_tools',
    description: t('ai.dropRoles.description'),
    tools: {
      getSelected: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropRoles.getSelected')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.selected || []) })
      },
      setSelected: {
        paramsSchema: z.array(z.string()).describe(t('ai.dropRoles.setSelected')),
        cb: (instance, params) => {
          instance.selected = params
          return { type: 'text', text: 'Roles selected' }
        }
      }
    }
  })
