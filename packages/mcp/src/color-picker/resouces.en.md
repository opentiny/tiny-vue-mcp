# ColorPicker Component MCP Tools

## Description

ColorPicker is a color selection component supporting multiple color formats.

## Main Tools

### getColor
Get the current selected color

**Parameters**: None

**Returns**: 
```json
{
  "color": "#000000"
}
```

### setColor
Set a color

**Parameters**: Color value (hex)

**Returns**: Success message

### getFormats
Get supported color formats

**Parameters**: None

**Returns**: 
```json
{
  "formats": ["hex", "rgb", "hsl"]
}
```

### clearColor
Clear the color

**Parameters**: None

**Returns**: Color cleared message

### Usage

```typescript
const picker = ref(null)
const config = getColorPickerConfig()
const color = await config.tools.getColor.cb(picker.value)
```
