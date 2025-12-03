import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getSelectWrapperConfig = () =>
  defineComponentTool({
    name: 'select_wrapper_component_tools',
    description: t('ai.selectWrapper.description'),
    tools: {
      getValue: {
        paramsSchema: z.boolean().optional().describe(t('ai.selectWrapper.getValue')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.value || '') })
      },
      setValue: {
        paramsSchema: z.unknown().describe(t('ai.selectWrapper.setValue')),
        cb: (instance, params) => {
          instance.value = params
          return { type: 'text', text: 'Value set' }
        }
      }
    }
  })
