# DateTable 组件工具

## 功能描述
DateTable 组件工具提供了日期表格的操作功能。

## 可用工具

### 1. getSelectedDate
获取选中的日期

**参数：** 无

**返回值：** `{ type: 'text', text: '{"date": string|null}' }`

### 2. setSelectedDate
设置选中日期

**参数：** 日期字符串

**返回值：** `{ type: 'text', text: 'Date selected: ...' }`

### 3. getMonth
获取当前月份

**参数：** 无

**返回值：** `{ type: 'text', text: '{"month": number}' }`

### 4. getDates
获取日期列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"dates":[...], "total": number}' }`

## 使用示例

```javascript
// 获取选中日期
const date = component.getSelectedDate()

// 设置日期
component.setSelectedDate('2024-01-15')

// 获取月份
const month = component.getMonth()
```
