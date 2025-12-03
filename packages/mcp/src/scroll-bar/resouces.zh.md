# ScrollBar 组件工具

## 功能描述
ScrollBar 组件工具提供了滚动条的操作功能。

## 可用工具

### 1. getPosition
获取滚动位置

**参数：** 无

**返回值：** `{ type: 'text', text: '{"position": number}' }`

### 2. setPosition
设置滚动位置

**参数：** 位置百分比（0-100）

**返回值：** `{ type: 'text', text: 'Position set to ...%' }`

### 3. getSize
获取滚动条大小

**参数：** 无

**返回值：** `{ type: 'text', text: '{"size": number}' }`

### 4. scroll
滚动指定距离

**参数：** `{ direction: 'up' | 'down', distance: number }`

**返回值：** `{ type: 'text', text: 'Scrolled ... by ...px' }`

## 使用示例

```javascript
// 获取位置
const position = component.getPosition()

// 设置位置
component.setPosition(50)

// 获取大小
const size = component.getSize()

// 向下滚动
component.scroll({ direction: 'down', distance: 50 })
```
