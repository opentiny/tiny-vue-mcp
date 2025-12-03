import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getNotifyConfig = () =>
  defineComponentTool({
    name: 'notify_component_tools',
    description: t('ai.notify.description'),
    tools: {
      show: {
        paramsSchema: z.object({ message: z.string() }).describe(t('ai.notify.show')),
        cb: (instance, params) => ({ type: 'text', text: 'Notification shown' })
      },
      close: {
        paramsSchema: z.boolean().optional().describe(t('ai.notify.close')),
        cb: (instance) => ({ type: 'text', text: 'Notification closed' })
      }
    }
  })
