import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getWatermarkConfig = () =>
  defineComponentTool({
    name: 'watermark_component_tools',
    description: t('ai.watermark.description'),
    tools: {
      getText: {
        paramsSchema: z.boolean().optional().describe(t('ai.watermark.getText')),
        cb: (instance) => {
          const text = instance.text || ''
          return { type: 'text', text: JSON.stringify({ text }) }
        }
      },
      setText: {
        paramsSchema: z.string().optional().describe(t('ai.watermark.setText')),
        cb: (instance, value) => {
          if (value) {
            instance.text = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
