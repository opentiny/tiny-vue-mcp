import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getFileUploadConfig = () =>
  defineComponentTool({
    name: 'file_upload_component_tools',
    description: t('ai.fileUpload.description'),
    tools: {
      getFileList: {
        paramsSchema: z.boolean().optional().describe(t('ai.fileUpload.getFileList')),
        cb: (instance) => {
          const fileList = instance.fileList || instance.uploadFiles || []
          return { type: 'text', text: JSON.stringify(fileList) }
        }
      },
      clearFileList: {
        paramsSchema: z.boolean().optional().describe(t('ai.fileUpload.clearFileList')),
        cb: (instance) => {
          instance.fileList = []
          return { type: 'text', text: 'success' }
        }
      },
      removeFile: {
        paramsSchema: z.string().optional().describe(t('ai.fileUpload.removeFile')),
        cb: (instance, value) => {
          if (value && instance.remove) {
            instance.remove(value)
          }
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
