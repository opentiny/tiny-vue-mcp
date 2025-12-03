# MonthTable 组件 MCP 工具

## 功能描述

MonthTable 是一个月份选择表格组件，用于选择特定的月份。

## 主要工具

### getSelectedMonth
获取选中的月份

**参数**: 无

**返回**: 
```json
{
  "month": null
}
```

### setSelectedMonth
设置选中的月份

**参数**: 月份数字 (1-12)

**返回**: 月份已设置消息

### getYear
获取当前年份

**参数**: 无

**返回**: 
```json
{
  "year": 2025
}
```

### nextYear
跳转到下一年

**参数**: 无

**返回**: 年份已前进一年消息

### Usage

```typescript
const table = ref(null)
const config = getMonthTableConfig()
const month = await config.tools.getSelectedMonth.cb(table.value)
```
