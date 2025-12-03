# Card Component MCP Tools

## Description

Card is a basic card component for displaying structured content.

## Main Tools

### getTitle
Get the card title

**Parameters**: None

**Returns**: 
```json
{
  "title": ""
}
```

### setTitle
Set the card title

**Parameters**: Title string

**Returns**: Title set message

### getContent
Get the card content

**Parameters**: None

**Returns**: 
```json
{
  "content": ""
}
```

### setContent
Set the card content

**Parameters**: Content string

**Returns**: Content updated message

### Usage

```typescript
const card = ref(null)
const config = getCardConfig()
const title = await config.tools.getTitle.cb(card.value)
```
