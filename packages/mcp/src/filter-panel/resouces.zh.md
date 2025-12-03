# FilterPanel 组件 MCP 工具

## 功能描述

FilterPanel 是一个过滤器面板组件，用于创建和管理复杂的过滤条件。

## 主要工具

### getFilters
获取所有过滤条件

**参数**: 无

**返回**: 
```json
{
  "filters": [...],
  "count": 0
}
```

### addFilter
添加过滤条件

**参数**:
- `field`: 字段名
- `operator`: 操作符
- `value`: 值

**返回**: 过滤条件已添加消息

### removeFilter
移除过滤条件

**参数**: 条件索引

**返回**: 过滤条件已移除消息

### clearFilters
清除所有过滤条件

**参数**: 无

**返回**: 所有过滤条件已清除消息

### Usage

```typescript
const panel = ref(null)
const config = getFilterPanelConfig()
const filters = await config.tools.getFilters.cb(panel.value)
```
