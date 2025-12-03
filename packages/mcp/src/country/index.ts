import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCountryConfig = () =>
  defineComponentTool({
    name: 'country_component_tools',
    description: t('ai.country.description'),
    tools: {
      getCountry: {
        paramsSchema: z.boolean().optional().describe(t('ai.country.getCountry')),
        cb: (instance) => ({ type: 'text', text: instance.country || '' })
      },
      setCountry: {
        paramsSchema: z.string().describe(t('ai.country.setCountry')),
        cb: (instance, params: string) => {
          instance.country = params
          return { type: 'text', text: 'Country set' }
        }
      }
    }
  })
