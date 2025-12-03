import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getStepsConfig = () =>
  defineComponentTool({
    name: 'steps_component_tools',
    description: t('ai.steps.description'),
    tools: {
      getCurrentStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.steps.getCurrentStep')),
        cb: (instance) => {
          const currentStep = instance.active || instance.modelValue || 0
          return { type: 'text', text: JSON.stringify({ currentStep }) }
        }
      },
      setCurrentStep: {
        paramsSchema: z.number().optional().describe(t('ai.steps.setCurrentStep')),
        cb: (instance, value) => {
          if (value !== undefined) {
            instance.active = value
          }
          return { type: 'text', text: 'success' }
        }
      },
      nextStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.steps.nextStep')),
        cb: (instance) => {
          const current = instance.active || 0
          instance.active = current + 1
          return { type: 'text', text: 'success' }
        }
      },
      prevStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.steps.prevStep')),
        cb: (instance) => {
          const current = instance.active || 0
          instance.active = Math.max(current - 1, 0)
          return { type: 'text', text: 'success' }
        }
      }
    }
  })
