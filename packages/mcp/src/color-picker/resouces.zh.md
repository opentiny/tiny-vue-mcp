# ColorPicker 组件 MCP 工具

## 功能描述

ColorPicker 是一个颜色选择器组件，支持多种颜色格式。

## 主要工具

### getColor
获取当前选中颜色

**参数**: 无

**返回**: 
```json
{
  "color": "#000000"
}
```

### setColor
设置颜色

**参数**: 颜色值（十六进制）

**返回**: 成功消息

### getFormats
获取支持的颜色格式

**参数**: 无

**返回**: 
```json
{
  "formats": ["hex", "rgb", "hsl"]
}
```

### clearColor
清除颜色

**参数**: 无

**返回**: 颜色已清除消息

### Usage

```typescript
const picker = ref(null)
const config = getColorPickerConfig()
const color = await config.tools.getColor.cb(picker.value)
```
