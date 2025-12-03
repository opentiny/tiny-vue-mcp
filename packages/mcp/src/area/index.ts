import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getAreaConfig = () =>
  defineComponentTool({
    name: 'area_component_tools',
    description: t('ai.area.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.area.getValue')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.value || {}) })
      },
      setValue: {
        paramsSchema: z.object({ value: z.any() }).describe(t('ai.area.setValue')),
        cb: (instance, params) => {
          instance.value = params.value
          return { type: 'text', text: 'Area updated' }
        }
      }
    }
  })
