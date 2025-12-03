# DateRange Component Tools

## Description
MCP tools for the DateRange component. Used to get and set date range values.

## Tools List

### getValue
Get the currently selected date range.

**Parameters**: None

**Return Value**: 
```json
{
  "value": ["start-date", "end-date"]
}
```

### setValue
Set the date range.

**Parameters**:
- `value` (string[]): Date range array [startDate, endDate]

**Return Value**: `success`

### clear
Clear the date range selection.

**Parameters**: None

**Return Value**: `success`
