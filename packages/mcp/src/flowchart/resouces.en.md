# Flowchart Component MCP Tools

## Description

Flowchart is a flowchart component for displaying and editing flowcharts.

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
- `label`: Node label

**Returns**: Node added message

### connectNodes
Connect nodes

**Parameters**:
- `from`: Source node ID
- `to`: Target node ID

**Returns**: Nodes connected message

### getLayout
Get the layout type

**Parameters**: None

**Returns**: 
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
