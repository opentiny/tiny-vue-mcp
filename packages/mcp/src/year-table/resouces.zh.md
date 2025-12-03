# YearTable 组件 MCP 工具

## 功能描述

YearTable 是一个年份选择表格组件，用于选择特定的年份。

## 主要工具

### getSelectedYear
获取选中的年份

**参数**: 无

**返回**: 
```json
{
  "year": null
}
```

### setSelectedYear
设置选中的年份

**参数**: 年份数字

**返回**: 年份已设置消息

### getYearRange
获取年份范围

**参数**: 无

**返回**: 
```json
{
  "start": 2015,
  "end": 2025
}
```

### nextDecade
跳转到下一个十年

**参数**: 无

**返回**: 年份范围已前进十年消息

### Usage

```typescript
const table = ref(null)
const config = getYearTableConfig()
const year = await config.tools.getSelectedYear.cb(table.value)
```
