import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getColorPickerConfig = () =>
  defineComponentTool({
    name: 'color_picker_component_tools',
    description: t('ai.colorPicker.description'),
    tools: {
      getColor: {
        paramsSchema: z.boolean().optional().describe(t('ai.colorPicker.getColor')),
        cb: (instance) => {
          const color = instance.modelValue || instance.color || '#000000'
          return { type: 'text', text: JSON.stringify({ color }) }
        }
      },
      setColor: {
        paramsSchema: z.string().describe(t('ai.colorPicker.setColor')),
        cb: (instance, params) => {
          instance.modelValue = params
          return { type: 'text', text: `Color set to ${params}` }
        }
      },
      getFormats: {
        paramsSchema: z.boolean().optional().describe(t('ai.colorPicker.getFormats')),
        cb: (instance) => {
          const formats = ['hex', 'rgb', 'hsl']
          return { type: 'text', text: JSON.stringify({ formats }) }
        }
      },
      clearColor: {
        paramsSchema: z.boolean().optional().describe(t('ai.colorPicker.clearColor')),
        cb: (instance) => {
          instance.modelValue = null
          return { type: 'text', text: 'Color cleared' }
        }
      }
    }
  })
