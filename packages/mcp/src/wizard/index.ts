import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getWizardConfig = () =>
  defineComponentTool({
    name: 'wizard_component_tools',
    description: t('ai.wizard.description'),
    tools: {
      getCurrentStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.wizard.getCurrentStep')),
        cb: (instance) => ({ type: 'text', text: String(instance.step || 0) })
      },
      nextStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.wizard.nextStep')),
        cb: (instance) => {
          instance.step = (instance.step || 0) + 1
          return { type: 'text', text: 'Moved to next step' }
        }
      },
      prevStep: {
        paramsSchema: z.boolean().optional().describe(t('ai.wizard.prevStep')),
        cb: (instance) => {
          instance.step = Math.max(0, (instance.step || 1) - 1)
          return { type: 'text', text: 'Moved to previous step' }
        }
      }
    }
  })
