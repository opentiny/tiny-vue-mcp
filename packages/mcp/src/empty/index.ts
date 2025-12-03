import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getEmptyConfig = () =>
  defineComponentTool({
    name: 'empty_component_tools',
    description: t('ai.empty.description'),
    tools: {
      getDescription: {
        paramsSchema: z.boolean().optional().describe(t('ai.empty.getDescription')),
        cb: (instance) => {
          const description = instance.description || '暂无数据'
          return { type: 'text', text: JSON.stringify({ description }) }
        }
      },
      setDescription: {
        paramsSchema: z.string().optional().describe(t('ai.empty.setDescription')),
        cb: (instance, value) => {
          if (value) {
            instance.description = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
