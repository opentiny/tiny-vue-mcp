# Result Component Tools

## Description
MCP tools for the Result component. Used to manage result status.

## Tools List

### getStatus
Get the result status.

**Parameters**: None

**Return Value**: 
```json
{
  "status": "success|warning|error|404|500"
}
```

### setStatus
Set the result status.

**Parameters**:
- `status` (string): Result status

**Return Value**: `success`
