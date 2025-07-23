import { z } from 'zod'
import { defineComponentTool } from '../utils/defineComponentTool'
import resourcesZh from './resouces.zh.md?raw'
import resourcesEn from './resouces.en.md?raw'
import { t } from '../utils/locale'

export const resources = {
  zh: resourcesZh,
  en: resourcesEn
}

export const getTreeConfig = () =>
  defineComponentTool({
    name: 'tree_component_tools',
    description: t('ai.tree.description'),
    tools: {
      setCurrentKey: {
        paramsSchema:  z.string().optional().describe(t('ai.tree.setCurrentKey')),
        cb: (instance, value) => {
          if(instance.showCheckbox){
            instance.setCheckedKeys([value])
          }else{
            instance.setCurrentKey(value)
          }
          return { type: 'text', text: 'success' }
        }
      },
      getTreeData: {
        paramsSchema: z.boolean().optional().describe(t('ai.tree.getTreeData')),
        cb: (instance) => {
          const treeData = instance.data
          return { type: 'text', text: JSON.stringify(treeData) }
        }
      },
      expandHlNode: {
        paramsSchema:  z.string().optional().describe(t('ai.tree.expandHlNode')),
        cb: (instance, value) => {
          const node = instance.getNode(value)
          node.expand()
          return { type: 'text', text: 'success' }
        }
      },
      collapseHlNode: {
        paramsSchema:  z.string().optional().describe(t('ai.tree.collapseHlNode')),
        cb: (instance, value) => {
          const node = instance.getNode(value)
          node.collapse()
          return { type: 'text', text: 'success' }
        }
      },
      removeNode: {
        paramsSchema:  z.string().optional().describe(t('ai.tree.removeNode')),
        cb: (instance, value) => {
          instance.remove(value)
          return { type: 'text', text: 'success' }
        }
      },
      insertBefore: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.tree.insertBefore')),
        cb: (instance, value) => {
          let id = 1000
          instance.insertBefore({ id, label: value.label }, value.id)
          id++
          return { type: 'text', text: 'success' }
        }
      },
      insertAfter: {
        paramsSchema: z.record(z.any()).optional().describe(t('ai.tree.insertAfter')),
        cb: (instance, value) => {
          let id = 1000
          instance.insertAfter({ id, label: value.label }, value.id)
          id++
          return { type: 'text', text: 'success' }
        }
      },
    }
  })
