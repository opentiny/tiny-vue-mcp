import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getProgressConfig = () =>
  defineComponentTool({
    name: 'progress_component_tools',
    description: t('ai.progress.description'),
    tools: {
      getProgress: {
        paramsSchema: z.boolean().optional().describe(t('ai.progress.getProgress')),
        cb: (instance) => {
          const percentage = instance.percentage || 0
          return { type: 'text', text: JSON.stringify({ percentage }) }
        }
      },
      setProgress: {
        paramsSchema: z.number().optional().describe(t('ai.progress.setProgress')),
        cb: (instance, value) => {
          if (value !== undefined && value >= 0 && value <= 100) {
            instance.percentage = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
