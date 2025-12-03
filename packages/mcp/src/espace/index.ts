import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getEspaceConfig = () =>
  defineComponentTool({
    name: 'espace_component_tools',
    description: t('ai.espace.description'),
    tools: {
      getInformation: {
        paramsSchema: z.boolean().optional().describe(t('ai.espace.getInformation')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.information || {}) })
      },
      setInformation: {
        paramsSchema: z.object({ data: z.any() }).describe(t('ai.espace.setInformation')),
        cb: (instance, params) => {
          instance.information = params.data
          return { type: 'text', text: 'Information set' }
        }
      }
    }
  })
