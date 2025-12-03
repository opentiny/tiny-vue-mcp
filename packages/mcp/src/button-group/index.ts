import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getButtonGroupConfig = () =>
  defineComponentTool({
    name: 'button_group_component_tools',
    description: t('ai.buttonGroup.description'),
    tools: {
      click: {
        paramsSchema: z.unknown().describe(t('ai.buttonGroup.click')),
        cb: (instance) => ({ type: 'text', text: 'Button clicked' })
      },
      getButtons: {
        paramsSchema: z.boolean().optional().describe(t('ai.buttonGroup.getButtons')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.buttons || []) })
      }
    }
  })
