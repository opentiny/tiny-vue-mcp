import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getTagGroupConfig = () =>
  defineComponentTool({
    name: 'tag_group_component_tools',
    description: t('ai.tagGroup.description'),
    tools: {
      getTags: {
        paramsSchema: z.boolean().optional().describe(t('ai.tagGroup.getTags')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.tags || []) })
      },
      addTag: {
        paramsSchema: z.string().describe(t('ai.tagGroup.addTag')),
        cb: (instance, params: string) => {
          instance.tags = instance.tags || []
          instance.tags.push(params)
          return { type: 'text', text: 'Tag added' }
        }
      }
    }
  })
