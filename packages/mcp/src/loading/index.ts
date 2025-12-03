import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getLoadingConfig = () =>
  defineComponentTool({
    name: 'loading_component_tools',
    description: t('ai.loading.description'),
    tools: {
      show: {
        paramsSchema: z.boolean().optional().describe(t('ai.loading.show')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'success' }
        }
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.loading.hide')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
