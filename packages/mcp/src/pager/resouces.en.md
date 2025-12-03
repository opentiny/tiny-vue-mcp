# Pager Component Tools

## Description
MCP tools for the Pager component. Used to get and set page number and page size.

## Tools List

### getCurrentPage
Get the current page number.

**Parameters**: None

**Return Value**: 
```json
{
  "currentPage": number
}
```

### setCurrentPage
Set the current page number.

**Parameters**:
- `page` (number): Page number to set

**Return Value**: `success`

### getPageSize
Get the page size.

**Parameters**: None

**Return Value**: 
```json
{
  "pageSize": number
}
```

### setPageSize
Set the page size.

**Parameters**:
- `size` (number): Number of items per page

**Return Value**: `success`
