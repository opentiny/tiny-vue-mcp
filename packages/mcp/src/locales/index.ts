import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getLocalesConfig = () =>
  defineComponentTool({
    name: 'locales_component_tools',
    description: t('ai.locales.description'),
    tools: {
      getCurrentLocale: {
        paramsSchema: z.boolean().optional().describe(t('ai.locales.getCurrentLocale')),
        cb: (instance) => ({ type: 'text', text: instance.locale || 'en' })
      },
      setLocale: {
        paramsSchema: z.string().describe(t('ai.locales.setLocale')),
        cb: (instance, params: string) => {
          instance.locale = params
          return { type: 'text', text: 'Locale updated' }
        }
      }
    }
  })
