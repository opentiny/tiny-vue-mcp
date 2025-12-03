# OptionGroup Component MCP Tools

## Description

OptionGroup is an option group component for grouping options.

## Main Tools

### getLabel
Get the group label

**Parameters**: None

**Returns**: 
```json
{
  "label": ""
}
```

### setLabel
Set the group label

**Parameters**: Label string

**Returns**: Label set message

### getOptions
Get options within the group

**Parameters**: None

**Returns**: 
```json
{
  "options": [...],
  "count": 0
}
```

### addOption
Add an option

**Parameters**:
- `label`: Option label
- `value`: Option value

**Returns**: Option added message

### Usage

```typescript
const group = ref(null)
const config = getOptionGroupConfig()
const options = await config.tools.getOptions.cb(group.value)
```
