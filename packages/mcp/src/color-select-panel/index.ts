import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getColorSelectPanelConfig = () =>
  defineComponentTool({
    name: 'color_select_panel_component_tools',
    description: t('ai.colorSelectPanel.description'),
    tools: {
      getColor: {
        paramsSchema: z.boolean().optional().describe(t('ai.colorSelectPanel.getColor')),
        cb: (instance) => ({ type: 'text', text: instance.color || '' })
      },
      setColor: {
        paramsSchema: z.string().describe(t('ai.colorSelectPanel.setColor')),
        cb: (instance, params: string) => {
          instance.color = params
          return { type: 'text', text: 'Color updated' }
        }
      },
      open: {
        paramsSchema: z.boolean().optional().describe(t('ai.colorSelectPanel.open')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Panel opened' }
        }
      }
    }
  })
