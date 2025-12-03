# DatePanel 组件工具

## 功能描述
DatePanel 组件工具提供了日期选择面板的操作功能。

## 可用工具

### 1. getDate
获取当前选中日期

**参数：** 无

**返回值：** `{ type: 'text', text: '{"date": string|null}' }`

### 2. setDate
设置选中日期

**参数：** 日期字符串

**返回值：** `{ type: 'text', text: 'Date set to ...' }`

### 3. nextMonth
切换到下一个月

**参数：** 无

**返回值：** `{ type: 'text', text: 'Advanced to next month' }`

### 4. previousMonth
切换到上一个月

**参数：** 无

**返回值：** `{ type: 'text', text: 'Moved to previous month' }`

## 使用示例

```javascript
// 获取日期
const date = component.getDate()

// 设置日期
component.setDate('2024-01-15')

// 下一个月
component.nextMonth()
```
