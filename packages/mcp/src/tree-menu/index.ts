import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTreeMenuConfig = () =>
  defineComponentTool({
    name: 'tree_menu_component_tools',
    description: t('ai.treeMenu.description'),
    tools: {
      getSelectedNode: {
        paramsSchema: z.boolean().optional().describe(t('ai.treeMenu.getSelectedNode')),
        cb: (instance) => {
          const selectedNode = instance.selectedNode || null
          return { type: 'text', text: JSON.stringify({ selectedNode }) }
        }
      },
      setSelectedNode: {
        paramsSchema: z.string().optional().describe(t('ai.treeMenu.setSelectedNode')),
        cb: (instance, value) => {
          if (value) {
            instance.selectedNode = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
