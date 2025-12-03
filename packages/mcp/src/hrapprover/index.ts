import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getHrapproverConfig = () =>
  defineComponentTool({
    name: 'hrapprover_component_tools',
    description: t('ai.hrapprover.description'),
    tools: {
      getApprovers: {
        paramsSchema: z.boolean().optional().describe(t('ai.hrapprover.getApprovers')),
        cb: (instance) => ({ type: 'text', text: JSON.stringify(instance.approvers || []) })
      },
      addApprover: {
        paramsSchema: z.object({ id: z.string(), name: z.string() }).describe(t('ai.hrapprover.addApprover')),
        cb: (instance, params) => {
          instance.approvers = instance.approvers || []
          instance.approvers.push(params)
          return { type: 'text', text: 'Approver added' }
        }
      }
    }
  })
