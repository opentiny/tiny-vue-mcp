import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTreeSelectConfig = () =>
  defineComponentTool({
    name: 'tree_select_component_tools',
    description: t('ai.treeSelect.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.treeSelect.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || instance.value || null
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.unknown().describe(t('ai.treeSelect.setValue')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: 'success' }
        }
      },
      getSelectedNodes: {
        paramsSchema: z.boolean().optional().describe(t('ai.treeSelect.getSelectedNodes')),
        cb: (instance) => {
          const nodes = instance.selectedNodes || []
          return { type: 'text', text: JSON.stringify({ nodes }) }
        }
      },
      expandNode: {
        paramsSchema: z.unknown().describe(t('ai.treeSelect.expandNode')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Node expanded successfully' }
        }
      }
    }
  })
