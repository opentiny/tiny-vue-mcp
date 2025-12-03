# YearTable Component MCP Tools

## Description

YearTable is a year selection table component for selecting specific years.

## Main Tools

### getSelectedYear
Get the selected year

**Parameters**: None

**Returns**: 
```json
{
  "year": null
}
```

### setSelectedYear
Set the selected year

**Parameters**: Year number

**Returns**: Year set message

### getYearRange
Get the year range

**Parameters**: None

**Returns**: 
```json
{
  "start": 2015,
  "end": 2025
}
```

### nextDecade
Jump to the next decade

**Parameters**: None

**Returns**: Year range advanced by 10 years message

### Usage

```typescript
const table = ref(null)
const config = getYearTableConfig()
const year = await config.tools.getSelectedYear.cb(table.value)
```
