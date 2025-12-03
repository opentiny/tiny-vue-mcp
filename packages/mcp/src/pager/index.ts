import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getPagerConfig = () =>
  defineComponentTool({
    name: 'pager_component_tools',
    description: t('ai.pager.description'),
    tools: {
      getCurrentPage: {
        paramsSchema: z.boolean().optional().describe(t('ai.pager.getCurrentPage')),
        cb: (instance) => {
          const currentPage = instance.currentPage || 1
          return { type: 'text', text: JSON.stringify({ currentPage }) }
        }
      },
      setCurrentPage: {
        paramsSchema: z.number().optional().describe(t('ai.pager.setCurrentPage')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.currentPage = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      getPageSize: {
        paramsSchema: z.boolean().optional().describe(t('ai.pager.getPageSize')),
        cb: (instance) => {
          const pageSize = instance.pageSize || 10
          return { type: 'text', text: JSON.stringify({ pageSize }) }
        }
      },
      setPageSize: {
        paramsSchema: z.number().optional().describe(t('ai.pager.setPageSize')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.pageSize = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
