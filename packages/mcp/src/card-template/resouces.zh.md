# CardTemplate 组件 MCP 工具

## 功能描述

CardTemplate 是一个卡片模板组件，支持自定义模板。

## 主要工具

### getTemplate
获取当前模板

**参数**: 无

**返回**: 
```json
{
  "template": "default"
}
```

### setTemplate
设置模板

**参数**: 模板名称

**返回**: 模板已设置消息

### getData
获取模板数据

**参数**: 无

**返回**: 
```json
{
  "data": {}
}
```

### render
渲染模板

**参数**: 
- `data`: 模板数据

**返回**: 模板已渲染消息

### Usage

```typescript
const template = ref(null)
const config = getCardTemplateConfig()
const currentTemplate = await config.tools.getTemplate.cb(template.value)
```
