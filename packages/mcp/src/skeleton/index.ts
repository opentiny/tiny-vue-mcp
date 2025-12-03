import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSkeletonConfig = () =>
  defineComponentTool({
    name: 'skeleton_component_tools',
    description: t('ai.skeleton.description'),
    tools: {
      getLoading: {
        paramsSchema: z.boolean().optional().describe(t('ai.skeleton.getLoading')),
        cb: (instance) => {
          const loading = instance.loading || true
          return { type: 'text', text: JSON.stringify({ loading }) }
        }
      },
      setLoading: {
        paramsSchema: z.boolean().optional().describe(t('ai.skeleton.setLoading')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.loading = value
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
