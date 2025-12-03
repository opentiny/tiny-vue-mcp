import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getInfiniteScrollConfig = () =>
  defineComponentTool({
    name: 'infinite_scroll_component_tools',
    description: t('ai.infiniteScroll.description'),
    tools: {
      loadMore: {
        paramsSchema: z.boolean().optional().describe(t('ai.infiniteScroll.loadMore')),
        cb: (instance) => ({ type: 'text', text: 'More items loaded' })
      },
      reset: {
        paramsSchema: z.boolean().optional().describe(t('ai.infiniteScroll.reset')),
        cb: (instance) => ({ type: 'text', text: 'Scroll reset' })
      }
    }
  })
