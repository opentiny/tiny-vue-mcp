import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getMindMapConfig = () =>
  defineComponentTool({
    name: 'mind_map_component_tools',
    description: t('ai.mindMap.description'),
    tools: {
      getNodes: {
        paramsSchema: z.boolean().optional().describe(t('ai.mindMap.getNodes')),
        cb: (instance) => {
          const nodes = instance.nodes || []
          return { type: 'text', text: JSON.stringify({ nodes, count: nodes.length }) }
        }
      },
      addNode: {
        paramsSchema: z.object({ id: z.string(), text: z.string(), parentId: z.string().optional() }).describe(t('ai.mindMap.addNode')),
        cb: (instance, params) => {
          return { type: 'text', text: `Node added: ${params.text}` }
        }
      },
      expandAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.mindMap.expandAll')),
        cb: (instance) => {
          return { type: 'text', text: 'All nodes expanded' }
        }
      },
      collapseAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.mindMap.collapseAll')),
        cb: (instance) => {
          return { type: 'text', text: 'All nodes collapsed' }
        }
      }
    }
  })
