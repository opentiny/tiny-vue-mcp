# Flowchart 组件 MCP 工具

## 功能描述

Flowchart 是一个流程图组件，用于展示和编辑流程图。

## 主要工具

### getNodes
获取所有节点

**参数**: 无

**返回**: 
```json
{
  "nodes": [...],
  "count": 0
}
```

### addNode
添加节点

**参数**:
- `id`: 节点ID
- `label`: 节点标签

**返回**: 节点已添加消息

### connectNodes
连接节点

**参数**:
- `from`: 源节点ID
- `to`: 目标节点ID

**返回**: 节点已连接消息

### getLayout
获取布局类型

**参数**: 无

**返回**: 
```json
{
  "layout": "hierarchical"
}
```

### Usage

```typescript
const chart = ref(null)
const config = getFlowchartConfig()
const nodes = await config.tools.getNodes.cb(chart.value)
```
