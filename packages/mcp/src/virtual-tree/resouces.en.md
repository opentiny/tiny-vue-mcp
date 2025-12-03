# VirtualTree Component MCP Tools

## Description

VirtualTree is a virtualized tree component supporting large-scale hierarchical structures.

## Main Tools

### getSelectedNodes
Get all selected nodes

**Parameters**: None

**Returns**: 
```json
{
  "nodes": [...],
  "count": 0
}
```

### expandAll
Expand all nodes

**Parameters**: None

**Returns**: All nodes expanded message

### collapseAll
Collapse all nodes

**Parameters**: None

**Returns**: All nodes collapsed message

### selectNode
Select a specific node

**Parameters**: Node data

**Returns**: Node selected successfully message

### Usage

```typescript
const tree = ref(null)
const config = getVirtualTreeConfig()
const nodes = await config.tools.getSelectedNodes.cb(tree.value)
```
