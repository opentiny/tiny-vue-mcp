# CardTemplate Component MCP Tools

## Description

CardTemplate is a card template component supporting custom templates.

## Main Tools

### getTemplate
Get the current template

**Parameters**: None

**Returns**: 
```json
{
  "template": "default"
}
```

### setTemplate
Set the template

**Parameters**: Template name

**Returns**: Template set message

### getData
Get template data

**Parameters**: None

**Returns**: 
```json
{
  "data": {}
}
```

### render
Render the template

**Parameters**: 
- `data`: Template data

**Returns**: Template rendered message

### Usage

```typescript
const template = ref(null)
const config = getCardTemplateConfig()
const currentTemplate = await config.tools.getTemplate.cb(template.value)
```
