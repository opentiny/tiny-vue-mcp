# Sticky 组件工具

## 功能描述
Sticky 组件工具提供了粘性定位元素的操作功能。

## 可用工具

### 1. getOffset
获取偏移量

**参数：** 无

**返回值：** `{ type: 'text', text: '{"offset": number}' }`

### 2. setOffset
设置偏移量

**参数：** 偏移像素数

**返回值：** `{ type: 'text', text: 'Offset set to ...px' }`

### 3. isSticky
检查是否粘性定位

**参数：** 无

**返回值：** `{ type: 'text', text: '{"sticky": boolean}' }`

### 4. getZIndex
获取z-index

**参数：** 无

**返回值：** `{ type: 'text', text: '{"zIndex": number}' }`

## 使用示例

```javascript
// 获取偏移量
const offset = component.getOffset()

// 设置偏移量
component.setOffset(10)

// 检查粘性定位
const isSticky = component.isSticky()

// 获取z-index
const zIndex = component.getZIndex()
```
