import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getGridSelectConfig = () =>
  defineComponentTool({
    name: 'grid_select_component_tools',
    description: t('ai.gridSelect.description'),
    tools: {
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.gridSelect.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Grid dialog opened' }
        }
      },
      getSelected: {
        paramsSchema: z.boolean().optional().describe(t('ai.gridSelect.getSelected')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.selected || []) })
      }
    }
  })
