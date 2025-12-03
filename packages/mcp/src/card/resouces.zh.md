# Card 组件 MCP 工具

## 功能描述

Card 是一个基础卡片组件，用于展示结构化的内容。

## 主要工具

### getTitle
获取卡片标题

**参数**: 无

**返回**: 
```json
{
  "title": ""
}
```

### setTitle
设置卡片标题

**参数**: 标题字符串

**返回**: 标题已设置消息

### getContent
获取卡片内容

**参数**: 无

**返回**: 
```json
{
  "content": ""
}
```

### setContent
设置卡片内容

**参数**: 内容字符串

**返回**: 内容已更新消息

### Usage

```typescript
const card = ref(null)
const config = getCardConfig()
const title = await config.tools.getTitle.cb(card.value)
```
