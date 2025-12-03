import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCompanyConfig = () =>
  defineComponentTool({
    name: 'company_component_tools',
    description: t('ai.company.description'),
    tools: {
      getCompany: {
        paramsSchema: z.boolean().optional().describe(t('ai.company.getCompany')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.company || {}) })
      },
      setCompany: {
        paramsSchema: z.object({ id: z.string(), name: z.string() }).describe(t('ai.company.setCompany')),
        cb: (instance, params) => {
          instance.company = params
          return { type: 'text', text: 'Company set' }
        }
      }
    }
  })
