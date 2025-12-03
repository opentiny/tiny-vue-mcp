import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getUserHeadConfig = () =>
  defineComponentTool({
    name: 'user_head_component_tools',
    description: t('ai.userHead.description'),
    tools: {
      getAvatar: {
        paramsSchema: z.boolean().optional().describe(t('ai.userHead.getAvatar')),
        cb: (instance) => ({ type: 'text', text: instance.avatar || '' })
      },
      setAvatar: {
        paramsSchema: z.string().describe(t('ai.userHead.setAvatar')),
        cb: (instance, params: string) => {
          instance.avatar = params
          return { type: 'text', text: 'Avatar set' }
        }
      }
    }
  })
