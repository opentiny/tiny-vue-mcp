import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getBulletinBoardConfig = () =>
  defineComponentTool({
    name: 'bulletin_board_component_tools',
    description: t('ai.bulletinBoard.description'),
    tools: {
      getMessages: {
        paramsSchema: z.boolean().optional().describe(t('ai.bulletinBoard.getMessages')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.messages || []) })
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.bulletinBoard.clear')),
        cb: (instance) => ({ type: 'text', text: 'Cleared' })
      }
    }
  })
