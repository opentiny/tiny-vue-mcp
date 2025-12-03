# Popconfirm 组件 MCP 工具

## 功能描述

Popconfirm 是一个气泡确认框组件，用于重要操作的二次确认。

## 主要工具

### show
显示确认框

**参数**: 无

**返回**: 确认框已显示消息

### hide
隐藏确认框

**参数**: 无

**返回**: 确认框已隐藏消息

### confirm
确认操作

**参数**: 无

**返回**: 操作已确认消息

### cancel
取消操作

**参数**: 无

**返回**: 操作已取消消息

### Usage

```typescript
const confirm = ref(null)
const config = getPopconfirmConfig()
await config.tools.show.cb(confirm.value)
```
