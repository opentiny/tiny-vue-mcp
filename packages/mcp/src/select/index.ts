import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getSelectConfig = () =>
  defineComponentTool({
    name: 'select_component_tools',
    description: t('ai.select.description'),
    tools: {
      openMenu: {
        paramsSchema: z.boolean().optional().describe(t('ai.select.openMenu')),
        cb: (instance) => {
          instance.showMenu?.()
          return { type: 'text', text: 'success' }
        }
      },
      closeMenu: {
        paramsSchema: z.boolean().optional().describe(t('ai.select.closeMenu')),
        cb: (instance) => {
          instance.hideMenu?.()
          return { type: 'text', text: 'success' }
        }
      },
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.select.getValue')),
        cb: (instance) => {
          const value = instance.modelValue
          return { type: 'text', text: JSON.stringify({ value }) }
        }
      },
      setValue: {
        paramsSchema: z.string().optional().describe(t('ai.select.setValue')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.modelValue = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      getOptions: {
        paramsSchema: z.boolean().optional().describe(t('ai.select.getOptions')),
        cb: (instance) => {
          const options = instance.options || []
          const cleanOptions = options.map((option: any) => ({
            label: option.label,
            value: option.value
          }))
          return { type: 'text', text: JSON.stringify(cleanOptions) }
        }
      },
      clearValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.select.clearValue')),
        cb: (instance) => {
          instance.modelValue = ''
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
