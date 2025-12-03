# Statistic 组件工具

## 功能描述
Statistic 组件工具提供了统计信息的操作功能。

## 可用工具

### 1. getValue
获取统计值

**参数：** 无

**返回值：** `{ type: 'text', text: '{"value": number}' }`

### 2. setValue
设置统计值

**参数：** 数值

**返回值：** `{ type: 'text', text: 'Value set to ...' }`

### 3. getTitle
获取标题

**参数：** 无

**返回值：** `{ type: 'text', text: '{"title": string}' }`

### 4. getPrefix
获取前缀

**参数：** 无

**返回值：** `{ type: 'text', text: '{"prefix": string}' }`

## 使用示例

```javascript
// 获取值
const value = component.getValue()

// 设置值
component.setValue(100)

// 获取标题
const title = component.getTitle()

// 获取前缀
const prefix = component.getPrefix()
```
