# QueryBuilder Component MCP Tools

## Description

QueryBuilder is a query builder component for building complex query conditions.

## Main Tools

### getQuery
Get the query string

**Parameters**: None

**Returns**: 
```json
{
  "query": ""
}
```

### setQuery
Set the query string

**Parameters**: Query string

**Returns**: Query set message

### addCondition
Add a query condition

**Parameters**:
- `field`: Field name
- `operator`: Operator
- `value`: Value

**Returns**: Condition added message

### executeQuery
Execute the query

**Parameters**: None

**Returns**: Query executed message

### Usage

```typescript
const builder = ref(null)
const config = getQueryBuilderConfig()
const query = await config.tools.getQuery.cb(builder.value)
```
