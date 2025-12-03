# TimeRange 组件 MCP 工具

## 功能描述

TimeRange 是一个时间范围选择器组件。

## 主要工具

### getRange
获取时间范围

**参数**: 无

**返回**: 
```json
{
  "start": null,
  "end": null
}
```

### setRange
设置时间范围

**参数**: 时间数组 [start, end]

**返回**: 时间范围已设置消息

### getStartTime
获取开始时间

**参数**: 无

**返回**: 
```json
{
  "start": null
}
```

### setStartTime
设置开始时间

**参数**: 开始时间字符串

**返回**: 开始时间已设置消息

### Usage

```typescript
const range = ref(null)
const config = getTimeRangeConfig()
const timeRange = await config.tools.getRange.cb(range.value)
```
