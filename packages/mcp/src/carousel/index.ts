import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getCarouselConfig = () =>
  defineComponentTool({
    name: 'carousel_component_tools',
    description: t('ai.carousel.description'),
    tools: {
      getCurrentIndex: {
        paramsSchema: z.boolean().optional().describe(t('ai.carousel.getCurrentIndex')),
        cb: (instance) => {
          const currentIndex = instance.activeIndex || 0
          return { type: 'text', text: JSON.stringify({ currentIndex }) }
        }
      },
      setCurrentIndex: {
        paramsSchema: z.number().optional().describe(t('ai.carousel.setCurrentIndex')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.activeIndex = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      next: {
        paramsSchema: z.boolean().optional().describe(t('ai.carousel.next')),
        cb: (instance) => {
          instance.next?.()
          return { type: 'text', text: 'success' }
        }
      },
      prev: {
        paramsSchema: z.boolean().optional().describe(t('ai.carousel.prev')),
        cb: (instance) => {
          instance.prev?.()
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
