# TreeSelect 组件 MCP 工具

## 功能描述

TreeSelect 是一个树形选择器组件，支持树状结构的数据选择。

## 主要工具

### getValue
获取当前选中值

**参数**: 无

**返回**: 
```json
{
  "value": null
}
```

### setValue
设置选中值

**参数**: 任意值

**返回**: 成功消息

### getSelectedNodes
获取所有选中节点

**参数**: 无

**返回**: 
```json
{
  "nodes": [...]
}
```

### expandNode
展开指定节点

**参数**: 节点ID

**返回**: 节点展开成功消息

### Usage

```typescript
const treeSelect = ref(null)
const config = getTreeSelectConfig()
const value = await config.tools.getValue.cb(treeSelect.value)
```
