# OptionGroup 组件 MCP 工具

## 功能描述

OptionGroup 是一个选项组组件，用于对选项进行分组。

## 主要工具

### getLabel
获取分组标签

**参数**: 无

**返回**: 
```json
{
  "label": ""
}
```

### setLabel
设置分组标签

**参数**: 标签字符串

**返回**: 标签已设置消息

### getOptions
获取分组内的选项

**参数**: 无

**返回**: 
```json
{
  "options": [...],
  "count": 0
}
```

### addOption
添加选项

**参数**:
- `label`: 选项标签
- `value`: 选项值

**返回**: 选项已添加消息

### Usage

```typescript
const group = ref(null)
const config = getOptionGroupConfig()
const options = await config.tools.getOptions.cb(group.value)
```
