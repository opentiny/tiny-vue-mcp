# TimeSpinner 组件工具

## 功能描述
TimeSpinner 组件工具提供了时间调整器的操作功能。

## 可用工具

### 1. getTime
获取当前时间

**参数：** 无

**返回值：** `{ type: 'text', text: '{"time": string|null}' }`

### 2. setTime
设置时间

**参数：** 时间字符串

**返回值：** `{ type: 'text', text: 'Time set to ...' }`

### 3. increment
增加指定单位

**参数：** 'hour' | 'minute' | 'second'

**返回值：** `{ type: 'text', text: '... incremented' }`

### 4. decrement
减少指定单位

**参数：** 'hour' | 'minute' | 'second'

**返回值：** `{ type: 'text', text: '... decremented' }`

## 使用示例

```javascript
// 获取时间
const time = component.getTime()

// 设置时间
component.setTime('14:30:00')

// 增加小时
component.increment('hour')

// 减少分钟
component.decrement('minute')
```
