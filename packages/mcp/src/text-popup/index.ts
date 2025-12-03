import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTextPopupConfig = () =>
  defineComponentTool({
    name: 'text_popup_component_tools',
    description: t('ai.textPopup.description'),
    tools: {
      show: {
        paramsSchema: z.object({ text: z.string() }).describe(t('ai.textPopup.show')),
        cb: (instance, params) => ({ type: 'text', text: 'Text popup shown' })
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.textPopup.hide')),
        cb: (instance) => ({ type: 'text', text: 'Text popup hidden' })
      }
    }
  })
