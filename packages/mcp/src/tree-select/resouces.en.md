# TreeSelect Component MCP Tools

## Description

TreeSelect is a tree-based selector component supporting hierarchical data selection.

## Main Tools

### getValue
Get the current selected value

**Parameters**: None

**Returns**: 
```json
{
  "value": null
}
```

### setValue
Set the selected value

**Parameters**: Any value

**Returns**: Success message

### getSelectedNodes
Get all selected nodes

**Parameters**: None

**Returns**: 
```json
{
  "nodes": [...]
}
```

### expandNode
Expand a specific node

**Parameters**: Node ID

**Returns**: Node expanded successfully message

### Usage

```typescript
const treeSelect = ref(null)
const config = getTreeSelectConfig()
const value = await config.tools.getValue.cb(treeSelect.value)
```
