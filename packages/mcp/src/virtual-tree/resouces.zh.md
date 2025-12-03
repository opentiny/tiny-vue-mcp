# VirtualTree 组件 MCP 工具

## 功能描述

VirtualTree 是一个虚拟化的树形组件，支持大数据量的树形结构。

## 主要工具

### getSelectedNodes
获取所有选中节点

**参数**: 无

**返回**: 
```json
{
  "nodes": [...],
  "count": 0
}
```

### expandAll
展开所有节点

**参数**: 无

**返回**: 所有节点已展开消息

### collapseAll
折叠所有节点

**参数**: 无

**返回**: 所有节点已折叠消息

### selectNode
选中指定节点

**参数**: 节点数据

**返回**: 节点选中成功消息

### Usage

```typescript
const tree = ref(null)
const config = getVirtualTreeConfig()
const nodes = await config.tools.getSelectedNodes.cb(tree.value)
```
