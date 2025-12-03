import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getScrollTextConfig = () =>
  defineComponentTool({
    name: 'scroll_text_component_tools',
    description: t('ai.scrollText.description'),
    tools: {
      getText: {
        paramsSchema: z.boolean().optional().describe(t('ai.scrollText.getText')),
        cb: (instance) => {
          const text = instance.text || ''
          return { type: 'text', text: JSON.stringify({ text }) }
        }
      },
      setText: {
        paramsSchema: z.string().describe(t('ai.scrollText.setText')),
        cb: (instance, params) => {
          instance.text = params
          return { type: 'text', text: 'Text updated' }
        }
      },
      start: {
        paramsSchema: z.boolean().optional().describe(t('ai.scrollText.start')),
        cb: (instance) => {
          instance.isScrolling = true
          return { type: 'text', text: 'Text scrolling started' }
        }
      },
      stop: {
        paramsSchema: z.boolean().optional().describe(t('ai.scrollText.stop')),
        cb: (instance) => {
          instance.isScrolling = false
          return { type: 'text', text: 'Text scrolling stopped' }
        }
      }
    }
  })
