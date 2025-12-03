# MindMap 组件 MCP 工具

## 功能描述

MindMap 是一个思维导图组件，用于展示和编辑思维导图。

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
- `text`: 节点文本
- `parentId`: 父节点ID（可选）

**返回**: 节点已添加消息

### expandAll
展开所有节点

**参数**: 无

**返回**: 所有节点已展开消息

### collapseAll
折叠所有节点

**参数**: 无

**返回**: 所有节点已折叠消息

### Usage

```typescript
const map = ref(null)
const config = getMindMapConfig()
const nodes = await config.tools.getNodes.cb(map.value)
```
