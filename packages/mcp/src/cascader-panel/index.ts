import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCascaderPanelConfig = () =>
  defineComponentTool({
    name: 'cascader_panel_component_tools',
    description: t('ai.cascaderPanel.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.cascaderPanel.getValue')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.value || []) })
      },
      setValue: {
        paramsSchema: z.array(z.any()).describe(t('ai.cascaderPanel.setValue')),
        cb: (instance, params) => {
          instance.value = params
          return { type: 'text', text: 'Cascader value set' }
        }
      }
    }
  })
