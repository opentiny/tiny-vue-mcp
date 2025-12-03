import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getFlowchartConfig = () =>
  defineComponentTool({
    name: 'flowchart_component_tools',
    description: t('ai.flowchart.description'),
    tools: {
      getNodes: {
        paramsSchema: z.boolean().optional().describe(t('ai.flowchart.getNodes')),
        cb: (instance) => {
          const nodes = instance.nodes || []
          return { type: 'text', text: JSON.stringify({ nodes, count: nodes.length }) }
        }
      },
      addNode: {
        paramsSchema: z.object({ id: z.string(), label: z.string() }).describe(t('ai.flowchart.addNode')),
        cb: (instance, params) => {
          return { type: 'text', text: `Node added: ${params.label}` }
        }
      },
      connectNodes: {
        paramsSchema: z.object({ from: z.string(), to: z.string() }).describe(t('ai.flowchart.connectNodes')),
        cb: (instance, params) => {
          return { type: 'text', text: `Nodes connected: ${params.from} -> ${params.to}` }
        }
      },
      getLayout: {
        paramsSchema: z.boolean().optional().describe(t('ai.flowchart.getLayout')),
        cb: (instance) => {
          const layout = instance.layout || 'hierarchical'
          return { type: 'text', text: JSON.stringify({ layout }) }
        }
      }
    }
  })
