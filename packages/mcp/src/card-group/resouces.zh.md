# CardGroup 组件 MCP 工具

## 功能描述

CardGroup 是一个卡片组合容器组件，用于展示多张卡片。

## 主要工具

### getCards
获取所有卡片

**参数**: 无

**返回**: 
```json
{
  "cards": [...],
  "total": 0
}
```

### addCard
添加新卡片

**参数**:
- `title`: 卡片标题
- `content`: 卡片内容

**返回**: 卡片已添加消息

### removeCard
移除卡片

**参数**: 卡片索引

**返回**: 卡片已移除消息

### getLayout
获取布局类型

**参数**: 无

**返回**: 
```json
{
  "layout": "grid"
}
```

### Usage

```typescript
const group = ref(null)
const config = getCardGroupConfig()
const cards = await config.tools.getCards.cb(group.value)
```
