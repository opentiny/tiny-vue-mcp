import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getExceptionConfig = () =>
  defineComponentTool({
    name: 'exception_component_tools',
    description: t('ai.exception.description'),
    tools: {
      getCode: {
        paramsSchema: z.boolean().optional().describe(t('ai.exception.getCode')),
        cb: (instance) => ({ type: 'text', text: instance.code || '' })
      },
      setCode: {
        paramsSchema: z.string().describe(t('ai.exception.setCode')),
        cb: (instance, params: string) => {
          instance.code = params
          return { type: 'text', text: 'Exception code set' }
        }
      }
    }
  })
