import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getFormConfig = () =>
  defineComponentTool({
    name: 'form_component_tools',
    description: t('ai.form.description'),
    tools: {
      resetFields: {
        paramsSchema: z.boolean().optional().describe(t('ai.form.resetFields')),
        cb: (instance) => {
          instance.resetFields()
          return { type: 'text', text: 'success' }
        }
      },
      clearValidate: {
        paramsSchema: z.string().optional().describe(t('ai.form.clearValidate')),
        cb: (instance, value) => {
          if (typeof value === 'string' && value) {
            const arr = value.split(',')
            if(arr.length > 0) {
             instance.clearValidate(arr)
            }else {
              instance.clearValidate(value)
            }
          } 
          return { type: 'text', text: 'success' }
        }
      },
      clearValidateAll: {
        paramsSchema: z.boolean().optional().describe(t('ai.form.clearValidateAll')),
        cb: (instance) => {
          instance.clearValidate()
          return { type: 'text', text: 'success' }
        }
      },
      validate: {
        paramsSchema: z.boolean().optional().describe(t('ai.form.validate')),
        cb: async (instance) => {
          const result = await instance.validate()
          return { type: 'text', text: result ? 'success' : 'fail' }
        }
      },
      validateField: {
        paramsSchema: z.string().optional().describe(t('ai.form.validateField')),
        cb: (instance, value) => {
          if (typeof value === 'string' && value) {
            const arr = value.split(',')
            if(arr.length > 0) {
             instance.validateField(arr)
            }else {
              instance.validateField(value)
            }
          } 
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
