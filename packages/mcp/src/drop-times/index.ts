import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getDropTimesConfig = () =>
  defineComponentTool({
    name: 'drop_times_component_tools',
    description: t('ai.dropTimes.description'),
    tools: {
      getTime: {
        paramsSchema: z.boolean().optional().describe(t('ai.dropTimes.getTime')),
        cb: (instance) => ({ type: 'text', text: instance.time || '' })
      },
      setTime: {
        paramsSchema: z.string().describe(t('ai.dropTimes.setTime')),
        cb: (instance, params: string) => {
          instance.time = params
          return { type: 'text', text: 'Time set' }
        }
      }
    }
  })
