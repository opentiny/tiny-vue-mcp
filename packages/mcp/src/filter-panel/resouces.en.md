# FilterPanel Component MCP Tools

## Description

FilterPanel is a filter panel component for creating and managing complex filter conditions.

## Main Tools

### getFilters
Get all filter conditions

**Parameters**: None

**Returns**: 
```json
{
  "filters": [...],
  "count": 0
}
```

### addFilter
Add a filter condition

**Parameters**:
- `field`: Field name
- `operator`: Operator
- `value`: Value

**Returns**: Filter condition added message

### removeFilter
Remove a filter condition

**Parameters**: Condition index

**Returns**: Filter condition removed message

### clearFilters
Clear all filter conditions

**Parameters**: None

**Returns**: All filters cleared message

### Usage

```typescript
const panel = ref(null)
const config = getFilterPanelConfig()
const filters = await config.tools.getFilters.cb(panel.value)
```
