import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTableConfig = () =>
  defineComponentTool({
    name: 'table_component_tools',
    description: t('ai.table.description'),
    tools: {
      getTableData: {
        paramsSchema: z.boolean().optional().describe(t('ai.table.getTableData')),
        cb: (instance) => {
          const tableData = instance.tableData || instance.data || []
          return { type: 'text', text: JSON.stringify(tableData) }
        }
      },
      getColumns: {
        paramsSchema: z.boolean().optional().describe(t('ai.table.getColumns')),
        cb: (instance) => {
          const columns = instance.columns || []
          const result = columns
            .filter((col: any) => col.prop && col.label)
            .map((column: any) => ({
              prop: column.prop,
              label: column.label
            }))
          return { type: 'text', text: JSON.stringify(result) }
        }
      },
      getCurrentRow: {
        paramsSchema: z.boolean().optional().describe(t('ai.table.getCurrentRow')),
        cb: (instance) => {
          const currentRow = instance.currentRow || null
          return { type: 'text', text: JSON.stringify(currentRow) }
        }
      },
      setCurrentRow: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.table.setCurrentRow')),
        cb: (instance, value) => {
          instance.setCurrentRow?.(value)
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
