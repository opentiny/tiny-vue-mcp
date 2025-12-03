import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getResultConfig = () =>
  defineComponentTool({
    name: 'result_component_tools',
    description: t('ai.result.description'),
    tools: {
      getStatus: {
        paramsSchema: z.boolean().optional().describe(t('ai.result.getStatus')),
        cb: (instance) => {
          const status = instance.status || 'success'
          return { type: 'text', text: JSON.stringify({ status }) }
        }
      },
      setStatus: {
        paramsSchema: z.string().optional().describe(t('ai.result.setStatus')),
        cb: (instance, value) => {
          if (value) {
            instance.status = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
