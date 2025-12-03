import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getDatePickerConfig = () =>
  defineComponentTool({
    name: 'date_picker_component_tools',
    description: t('ai.datePicker.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePicker.getValue')),
        cb: (instance) => {
          const value = instance.modelValue || ''
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.string().optional().describe(t('ai.datePicker.setValue')),
        cb: (instance, value) => {
          if (value) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      clear: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePicker.clear')),
        cb: (instance) => {
          instance.modelValue = ''
          return { type: 'text', text: 'success' }
        }
      },
      openPicker: {
        paramsSchema: z.boolean().optional().describe(t('ai.datePicker.openPicker')),
        cb: (instance) => {
          instance.pickerVisible = true
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
