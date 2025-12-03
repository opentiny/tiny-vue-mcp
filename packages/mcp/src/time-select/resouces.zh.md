# TimeSelect 组件 MCP 工具

## 功能描述

TimeSelect 是一个时间选择器组件，用于选择特定时间。

## 主要工具

### getSelectedTime
获取选中时间

**参数**: 无

**返回**: 
```json
{
  "time": null
}
```

### setSelectedTime
设置选中时间

**参数**: 时间字符串

**返回**: 时间已设置消息

### getOptions
获取时间选项

**参数**: 无

**返回**: 
```json
{
  "options": [...],
  "total": 0
}
```

### clearSelection
清除选择

**参数**: 无

**返回**: 选择已清除消息

### Usage

```typescript
const select = ref(null)
const config = getTimeSelectConfig()
const time = await config.tools.getSelectedTime.cb(select.value)
```
