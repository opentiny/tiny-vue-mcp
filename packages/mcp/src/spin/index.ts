import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSpinConfig = () =>
  defineComponentTool({
    name: 'spin_component_tools',
    description: t('ai.spin.description'),
    tools: {
      getSpinning: {
        paramsSchema: z.boolean().optional().describe(t('ai.spin.getSpinning')),
        cb: (instance) => {
          const spinning = instance.spinning || false
          return { type: 'text', text: JSON.stringify({ spinning }) }
        }
      },
      setSpinning: {
        paramsSchema: z.boolean().optional().describe(t('ai.spin.setSpinning')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.spinning = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
