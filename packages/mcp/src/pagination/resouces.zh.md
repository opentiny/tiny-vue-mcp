# Pagination 组件工具

## 描述
Pagination（分页）组件的 MCP 工具集合。用于获取和设置页码和页面大小。

## 工具列表

### getCurrentPage
获取当前页码。

**参数**: 无

**返回值**: 
```json
{
  "currentPage": 1
}
```

### setCurrentPage
设置当前页码。

**参数**:
- `page` (number): 页码

**返回值**: `success`

### getPageSize
获取页面大小。

**参数**: 无

**返回值**: 
```json
{
  "pageSize": 10
}
```

### setPageSize
设置页面大小。

**参数**:
- `size` (number): 每页条数

**返回值**: `success`
