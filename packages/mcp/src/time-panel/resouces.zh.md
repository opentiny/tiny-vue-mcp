# TimePanel 组件工具

## 功能描述
TimePanel 组件工具提供了时间选择面板的操作功能。

## 可用工具

### 1. getTime
获取当前时间

**参数：** 无

**返回值：** `{ type: 'text', text: '{"time": string|null}' }`

### 2. setTime
设置时间

**参数：** 时间字符串

**返回值：** `{ type: 'text', text: 'Time set to ...' }`

### 3. getHour
获取小时

**参数：** 无

**返回值：** `{ type: 'text', text: '{"hour": number}' }`

### 4. setHour
设置小时

**参数：** 数字（0-23）

**返回值：** `{ type: 'text', text: 'Hour set to ...' }`

## 使用示例

```javascript
// 获取时间
const time = component.getTime()

// 设置时间
component.setTime('14:30:00')

// 设置小时
component.setHour(15)
```
