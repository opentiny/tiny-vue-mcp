import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getGridConfig = () =>
  defineComponentTool({
    name: 'grid_component_tools',
    description: t('ai.grid.description'),
    tools: {
      scrollToRow: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.grid.scrollToRow')),
        cb: (instance, value) => {
          const targetRow = instance.getRowById(value._RID)
          if (targetRow) {
            instance.scrollToRow(targetRow)
            return { type: 'text', text: 'success' }
          }
        }
      },
      getColumns: {
        paramsSchema: z.boolean().optional().describe(t('ai.grid.getColumns')),
        cb: (instance) => {
          const columns = instance.getColumns()
          const result = columns
            .filter((col: any) => col.property && col.title)
            .map((column: any) => ({
              property: column.property,
              title: column.title
            }))
          return { type: 'text', text: JSON.stringify(result) }
        }
      },
      getTableData: {
        paramsSchema: z.boolean().optional().describe(t('ai.grid.getTableData')),
        cb: (instance) => {
          const tableData = instance.getTableData().tableData

          return { type: 'text', text: JSON.stringify(tableData) }
        }
      },
      setSelection: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.grid.setSelection')),
        cb: (instance, value) => {
          const targetRow = instance.getRowById(value._RID)
          if (targetRow) {
            instance.scrollToRow(targetRow)
            instance.setSelection(targetRow, true)
            return { type: 'text', text: 'success' }
          }
        }
      },
      setAllSelection: {
        paramsSchema: z.boolean().optional().describe(t('ai.grid.setAllSelection')),
        cb: (instance, value) => {
          instance.setAllSelection(value)
          return { type: 'text', text: 'success' }
        }
      },
      insertRow: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.grid.insertRow')),
        cb: (instance, value) => {
          instance.insert(value)
          return { type: 'text', text: 'success' }
        }
      },
      updateRow: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.grid.updateRow')),
        cb: (instance, value) => {
          if (value) {
            const targetRow = instance.getRowById(value._RID)
            if (targetRow) {
              Object.assign(targetRow, value)
              return { type: 'text', text: 'success' }
            }
          }
          return { type: 'text', text: 'failed' }
        }
      },
      removeRow: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.grid.removeRow')),
        cb: (instance, value) => {
          if (value) {
            const row = instance.getRowById(value._RID)
            instance.remove(row)
            return { type: 'text', text: 'success' }
          }
          return { type: 'text', text: 'failed' }
        }
      }
    }
  })
