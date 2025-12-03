import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getQueryBuilderConfig = () =>
  defineComponentTool({
    name: 'query_builder_component_tools',
    description: t('ai.queryBuilder.description'),
    tools: {
      getQuery: {
        paramsSchema: z.boolean().optional().describe(t('ai.queryBuilder.getQuery')),
        cb: (instance) => {
          const query = instance.query || ''
          return { type: 'text', text: JSON.stringify({ query }) }
        }
      },
      setQuery: {
        paramsSchema: z.string().describe(t('ai.queryBuilder.setQuery')),
        cb: (instance, params) => {
          instance.query = params
          return { type: 'text', text: 'Query set successfully' }
        }
      },
      addCondition: {
        paramsSchema: z.object({ field: z.string(), operator: z.string(), value: z.unknown() }).describe(t('ai.queryBuilder.addCondition')),
        cb: (instance, params) => {
          return { type: 'text', text: `Condition added: ${params.field} ${params.operator}` }
        }
      },
      executeQuery: {
        paramsSchema: z.boolean().optional().describe(t('ai.queryBuilder.executeQuery')),
        cb: (instance) => {
          return { type: 'text', text: 'Query executed successfully' }
        }
      }
    }
  })
