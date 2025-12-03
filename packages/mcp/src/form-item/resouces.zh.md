# FormItem 组件 MCP 工具

## 功能描述

FormItem 是一个表单项组件，代表表单中的单个字段。

## 主要工具

### getLabel
获取表单项标签

**参数**: 无

**返回**: 
```json
{
  "label": ""
}
```

### setLabel
设置表单项标签

**参数**: 标签字符串

**返回**: 标签已设置消息

### validate
验证表单项

**参数**: 无

**返回**: 
```json
{
  "isValid": true
}
```

### getError
获取错误信息

**参数**: 无

**返回**: 
```json
{
  "error": null
}
```

### Usage

```typescript
const item = ref(null)
const config = getFormItemConfig()
const label = await config.tools.getLabel.cb(item.value)
```
