import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getIpAddressConfig = () =>
  defineComponentTool({
    name: 'ip_address_component_tools',
    description: t('ai.ipAddress.description'),
    tools: {
      getAddress: {
        paramsSchema: z.boolean().optional().describe(t('ai.ipAddress.getAddress')),
        cb: (instance) => ({ type: 'text', text: instance.address || '' })
      },
      setAddress: {
        paramsSchema: z.string().describe(t('ai.ipAddress.setAddress')),
        cb: (instance, params: string) => {
          instance.address = params
          return { type: 'text', text: 'IP address set' }
        }
      }
    }
  })
