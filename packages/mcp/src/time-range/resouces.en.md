# TimeRange Component MCP Tools

## Description

TimeRange is a time range selector component.

## Main Tools

### getRange
Get the time range

**Parameters**: None

**Returns**: 
```json
{
  "start": null,
  "end": null
}
```

### setRange
Set the time range

**Parameters**: Time array [start, end]

**Returns**: Time range set message

### getStartTime
Get the start time

**Parameters**: None

**Returns**: 
```json
{
  "start": null
}
```

### setStartTime
Set the start time

**Parameters**: Start time string

**Returns**: Start time set message

### Usage

```typescript
const range = ref(null)
const config = getTimeRangeConfig()
const timeRange = await config.tools.getRange.cb(range.value)
```
