# Transfer Component MCP Tools

## Description

Transfer is a component for moving items between two lists.

## Main Tools

### getLeftItems
Get all items in the left list

**Parameters**: None

**Returns**: 
```json
{
  "items": [...],
  "total": 10
}
```

### getRightItems
Get all items in the right list

**Parameters**: None

**Returns**: 
```json
{
  "items": [...],
  "total": 10
}
```

### move
Move items between lists

**Parameters**:
- `direction`: 'left' | 'right' move direction
- `items`: array of items to move

**Returns**: Success message

### Usage

```typescript
const transfer = ref(null)
const config = getTransferConfig()
const leftItems = await config.tools.getLeftItems.cb(transfer.value)
const rightItems = await config.tools.getRightItems.cb(transfer.value)
```
