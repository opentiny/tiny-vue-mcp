# TimeSelect Component MCP Tools

## Description

TimeSelect is a time selection component for selecting specific times.

## Main Tools

### getSelectedTime
Get the selected time

**Parameters**: None

**Returns**: 
```json
{
  "time": null
}
```

### setSelectedTime
Set the selected time

**Parameters**: Time string

**Returns**: Time set message

### getOptions
Get time options

**Parameters**: None

**Returns**: 
```json
{
  "options": [...],
  "total": 0
}
```

### clearSelection
Clear the selection

**Parameters**: None

**Returns**: Selection cleared message

### Usage

```typescript
const select = ref(null)
const config = getTimeSelectConfig()
const time = await config.tools.getSelectedTime.cb(select.value)
```
