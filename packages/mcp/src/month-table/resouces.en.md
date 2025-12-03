# MonthTable Component MCP Tools

## Description

MonthTable is a month selection table component for selecting specific months.

## Main Tools

### getSelectedMonth
Get the selected month

**Parameters**: None

**Returns**: 
```json
{
  "month": null
}
```

### setSelectedMonth
Set the selected month

**Parameters**: Month number (1-12)

**Returns**: Month set message

### getYear
Get the current year

**Parameters**: None

**Returns**: 
```json
{
  "year": 2025
}
```

### nextYear
Jump to the next year

**Parameters**: None

**Returns**: Year advanced by 1 message

### Usage

```typescript
const table = ref(null)
const config = getMonthTableConfig()
const month = await config.tools.getSelectedMonth.cb(table.value)
```
