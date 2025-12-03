import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getPaginationConfig = () =>
  defineComponentTool({
    name: 'pagination_component_tools',
    description: t('ai.pagination.description'),
    tools: {
      getCurrentPage: {
        paramsSchema: z.boolean().optional().describe(t('ai.pagination.getCurrentPage')),
        cb: (instance) => {
          const currentPage = instance.currentPage || 1
          return { type: 'text', text: JSON.stringify({ currentPage }) }
        }
      },
      setCurrentPage: {
        paramsSchema: z.number().optional().describe(t('ai.pagination.setCurrentPage')),
        cb: (instance, value) => {
          if (value) {
            instance.currentPage = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      getPageSize: {
        paramsSchema: z.boolean().optional().describe(t('ai.pagination.getPageSize')),
        cb: (instance) => {
          const pageSize = instance.pageSize || 10
          return { type: 'text', text: JSON.stringify({ pageSize }) }
        }
      },
      setPageSize: {
        paramsSchema: z.number().optional().describe(t('ai.pagination.setPageSize')),
        cb: (instance, value) => {
          if (value) {
            instance.pageSize = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
