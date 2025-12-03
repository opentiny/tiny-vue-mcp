import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getQrCodeConfig = () =>
  defineComponentTool({
    name: 'qr_code_component_tools',
    description: t('ai.qrCode.description'),
    tools: {
      generate: {
        paramsSchema: z.string().describe(t('ai.qrCode.generate')),
        cb: (instance, params: string) => {
          instance.qrCode = params
          return { type: 'text', text: 'QR Code generated' }
        }
      },
      getCode: {
        paramsSchema: z.boolean().optional().describe(t('ai.qrCode.getCode')),
        cb: (instance) => ({ type: 'text', text: instance.qrCode || '' })
      }
    }
  })
