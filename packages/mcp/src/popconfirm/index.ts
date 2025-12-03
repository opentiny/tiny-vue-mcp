import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getPopconfirmConfig = () =>
  defineComponentTool({
    name: 'popconfirm_component_tools',
    description: t('ai.popconfirm.description'),
    tools: {
      show: {
        paramsSchema: z.string().optional().describe(t('ai.popconfirm.show')),
        cb: (instance) => {
          instance.visible = true
          return { type: 'text', text: 'Popconfirm shown' }
        }
      },
      hide: {
        paramsSchema: z.boolean().optional().describe(t('ai.popconfirm.hide')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Popconfirm hidden' }
        }
      },
      confirm: {
        paramsSchema: z.boolean().optional().describe(t('ai.popconfirm.confirm')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Action confirmed' }
        }
      },
      cancel: {
        paramsSchema: z.boolean().optional().describe(t('ai.popconfirm.cancel')),
        cb: (instance) => {
          instance.visible = false
          return { type: 'text', text: 'Action cancelled' }
        }
      }
    }
  })
