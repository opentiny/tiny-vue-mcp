# Pagination Component Tools

## Description
MCP tools for the Pagination component. Used to get and set page number and page size.

## Tools List

### getCurrentPage
Get the current page number.

**Parameters**: None

**Return Value**: 
```json
{
  "currentPage": 1
}
```

### setCurrentPage
Set the current page number.

**Parameters**:
- `page` (number): Page number

**Return Value**: `success`

### getPageSize
Get the page size.

**Parameters**: None

**Return Value**: 
```json
{
  "pageSize": 10
}
```

### setPageSize
Set the page size.

**Parameters**:
- `size` (number): Number of items per page

**Return Value**: `success`
