# CardGroup Component MCP Tools

## Description

CardGroup is a card container component for displaying multiple cards.

## Main Tools

### getCards
Get all cards

**Parameters**: None

**Returns**: 
```json
{
  "cards": [...],
  "total": 0
}
```

### addCard
Add a new card

**Parameters**:
- `title`: Card title
- `content`: Card content

**Returns**: Card added message

### removeCard
Remove a card

**Parameters**: Card index

**Returns**: Card removed message

### getLayout
Get the layout type

**Parameters**: None

**Returns**: 
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
