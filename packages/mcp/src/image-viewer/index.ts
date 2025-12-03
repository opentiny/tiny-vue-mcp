import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getImageViewerConfig = () =>
  defineComponentTool({
    name: 'image_viewer_component_tools',
    description: t('ai.imageViewer.description'),
    tools: {
      getImages: {
        paramsSchema: z.boolean().optional().describe(t('ai.imageViewer.getImages')),
        cb: (instance) => {
          const images = instance.images || []
          return { type: 'text', text: JSON.stringify({ images: images.slice(0, 10), total: images.length }) }
        }
      },
      setImages: {
        paramsSchema: z.array(z.string()).describe(t('ai.imageViewer.setImages')),
        cb: (instance, params) => {
          instance.images = params
          return { type: 'text', text: `${params.length} images set` }
        }
      },
      goToImage: {
        paramsSchema: z.number().describe(t('ai.imageViewer.goToImage')),
        cb: (instance, params) => {
          instance.currentIndex = params
          return { type: 'text', text: `Navigated to image ${params}` }
        }
      },
      zoom: {
        paramsSchema: z.object({ level: z.number().min(0.1).max(10) }).describe(t('ai.imageViewer.zoom')),
        cb: (instance, params) => {
          instance.zoomLevel = params.level
          return { type: 'text', text: `Zoom level set to ${params.level}x` }
        }
      }
    }
  })
