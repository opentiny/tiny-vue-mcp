# MindMap Component MCP Tools

## Description

MindMap is a mind map component for displaying and editing mind maps.

## Main Tools

### getNodes
Get all nodes

**Parameters**: None

**Returns**: 
```json
{
  "nodes": [...],
  "count": 0
}
```

### addNode
Add a node

**Parameters**:
- `id`: Node ID
- `text`: Node text
- `parentId`: Parent node ID (optional)

**Returns**: Node added message

### expandAll
Expand all nodes

**Parameters**: None

**Returns**: All nodes expanded message

### collapseAll
Collapse all nodes

**Parameters**: None

**Returns**: All nodes collapsed message

### Usage

```typescript
const map = ref(null)
const config = getMindMapConfig()
const nodes = await config.tools.getNodes.cb(map.value)
```
