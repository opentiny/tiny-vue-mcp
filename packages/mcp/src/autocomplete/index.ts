import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = { zh: resourcesZh, en: resourcesEn }

export const getAutocompleteConfig = () =>
  defineComponentTool({
    name: 'autocomplete_component_tools',
    description: t('ai.autocomplete.description'),
    tools: {
      getSuggestions: {
        paramsSchema: z.string().optional().describe(t('ai.autocomplete.getSuggestions')),
        cb: (instance, params) => ({ type: 'text', text: JSON.stringify(instance.suggestions || []) })
      },
      select: {
        paramsSchema: z.unknown().describe(t('ai.autocomplete.select')),
        cb: (instance) => ({ type: 'text', text: 'Selected' })
      }
    }
  })
