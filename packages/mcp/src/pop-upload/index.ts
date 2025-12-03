import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getPopUploadConfig = () =>
  defineComponentTool({
    name: 'pop_upload_component_tools',
    description: t('ai.popUpload.description'),
    tools: {
      upload: {
        paramsSchema: z.object({ file: z.any() }).describe(t('ai.popUpload.upload')),
        cb: (instance, params) => ({ type: 'text', text: 'File uploaded' })
      },
      getFiles: {
        paramsSchema: z.boolean().optional().describe(t('ai.popUpload.getFiles')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.files || []) })
      }
    }
  })
