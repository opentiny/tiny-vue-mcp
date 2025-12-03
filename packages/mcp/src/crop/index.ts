import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getCropConfig = () =>
  defineComponentTool({
    name: 'crop_component_tools',
    description: t('ai.crop.description'),
    tools: {
      getImage: {
        paramsSchema: z.boolean().optional().describe(t('ai.crop.getImage')),
        cb: (instance) => ({ type: 'text', text: instance.image || '' })
      },
      setImage: {
        paramsSchema: z.string().describe(t('ai.crop.setImage')),
        cb: (instance, params: string) => {
          instance.image = params
          return { type: 'text', text: 'Image set' }
        }
      },
      crop: {
        paramsSchema: z.boolean().optional().describe(t('ai.crop.crop')),
        cb: (instance) => ({ type: 'text', text: instance.croppedImage || '' })
      }
    }
  })
