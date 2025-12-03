# Transfer 组件 MCP 工具

## 功能描述

Transfer 是一个用于在两个列表之间移动项目的组件。

## 主要工具

### getLeftItems
获取左侧列表中的所有项

**参数**: 无

**返回**: 
```json
{
  "items": [...],
  "total": 10
}
```

### getRightItems
获取右侧列表中的所有项

**参数**: 无

**返回**: 
```json
{
  "items": [...],
  "total": 10
}
```

### move
在两个列表之间移动项

**参数**:
- `direction`: 'left' | 'right' 移动方向
- `items`: 要移动的项数组

**返回**: 成功消息

### Usage

```typescript
const transfer = ref(null)
const config = getTransferConfig()
const leftItems = await config.tools.getLeftItems.cb(transfer.value)
const rightItems = await config.tools.getRightItems.cb(transfer.value)
```
