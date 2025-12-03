# FormItem Component MCP Tools

## Description

FormItem is a form field component representing a single field in a form.

## Main Tools

### getLabel
Get the form item label

**Parameters**: None

**Returns**: 
```json
{
  "label": ""
}
```

### setLabel
Set the form item label

**Parameters**: Label string

**Returns**: Label set message

### validate
Validate the form item

**Parameters**: None

**Returns**: 
```json
{
  "isValid": true
}
```

### getError
Get error message

**Parameters**: None

**Returns**: 
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
