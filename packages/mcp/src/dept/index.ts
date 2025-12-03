import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDeptConfig = () =>
  defineComponentTool({
    name: 'dept_component_tools',
    description: t('ai.dept.description'),
    tools: {
      getDept: {
        paramsSchema: z.boolean().optional().describe(t('ai.dept.getDept')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.dept || {}) })
      },
      setDept: {
        paramsSchema: z.object({ id: z.string(), name: z.string() }).describe(t('ai.dept.setDept')),
        cb: (instance, params) => {
          instance.dept = params
          return { type: 'text', text: 'Department set' }
        }
      }
    }
  })
