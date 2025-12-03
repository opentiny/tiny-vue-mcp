import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getUploadConfig = () =>
  defineComponentTool({
    name: 'upload_component_tools',
    description: t('ai.upload.description'),
    tools: {
      getFileList: {
        paramsSchema: z.boolean().optional().describe(t('ai.upload.getFileList')),
        cb: (instance) => {
          const fileList = instance.fileList || instance.files || []
          return { type: 'text', text: JSON.stringify(fileList) }
        }
      },
      clearFileList: {
        paramsSchema: z.boolean().optional().describe(t('ai.upload.clearFileList')),
        cb: (instance) => {
          instance.fileList = []
          return { type: 'text', text: 'success' }
        }
      },
      removeFile: {
        paramsSchema: z.string().optional().describe(t('ai.upload.removeFile')),
        cb: (instance, value) => {
          if (value && instance.remove) {
            instance.remove(value)
          }
          return { type: 'text', text: 'success' }
        }
      },
      submit: {
        paramsSchema: z.boolean().optional().describe(t('ai.upload.submit')),
        cb: (instance) => {
          instance.submit?.()
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
