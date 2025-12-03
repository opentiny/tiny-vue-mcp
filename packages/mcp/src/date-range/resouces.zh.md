# DateRange 组件工具

## 描述
DateRange（日期范围）组件的 MCP 工具集合。用于获取和设置日期范围值。

## 工具列表

### getValue
获取当前选择的日期范围。

**参数**: 无

**返回值**: 
```json
{
  "value": ["start-date", "end-date"]
}
```

### setValue
设置日期范围。

**参数**:
- `value` (string[]): 日期范围数组 [startDate, endDate]

**返回值**: `success`

### clear
清空日期范围选择。

**参数**: 无

**返回值**: `success`
