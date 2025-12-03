import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getVirtualTreeConfig = () =>
  defineComponentTool({
    name: 'virtual_tree_component_tools',
    description: t('ai.virtualTree.description'),
    tools: {
      getSelectedNodes: {
        paramsSchema: z.boolean().optional().describe(t('ai.virtualTree.getSelectedNodes')),
        cb: (instance) => {
          const nodes = instance.selectedNodes || []
          return { type: 'text', text: JSON.stringify({ nodes, count: nodes.length }) }
        }
      },
      expandAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.virtualTree.expandAll')),
        cb: (instance) => {
          return { type: 'text', text: 'All nodes expanded' }
        }
      },
      collapseAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.virtualTree.collapseAll')),
        cb: (instance) => {
          return { type: 'text', text: 'All nodes collapsed' }
        }
      },
      selectNode: {
        paramsSchema: z.unknown().describe(t('ai.virtualTree.selectNode')),
        cb: (instance, params) => {
          return { type: 'text', text: 'Node selected successfully' }
        }
      }
    }
  })
