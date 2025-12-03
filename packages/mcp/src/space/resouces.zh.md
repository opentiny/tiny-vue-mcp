# Space 组件工具

## 功能描述
Space 组件工具提供了空间间隔布局的操作功能。

## 可用工具

### 1. getDirection
获取方向

**参数：** 无

**返回值：** `{ type: 'text', text: '{"direction": "horizontal" | "vertical"}' }`

### 2. setDirection
设置方向

**参数：** 'horizontal' | 'vertical'

**返回值：** `{ type: 'text', text: 'Direction set to ...' }`

### 3. getSize
获取间隔大小

**参数：** 无

**返回值：** `{ type: 'text', text: '{"size": "small" | "medium" | "large"}' }`

### 4. setSize
设置间隔大小

**参数：** 'small' | 'medium' | 'large'

**返回值：** `{ type: 'text', text: 'Size set to ...' }`

## 使用示例

```javascript
// 获取方向
const direction = component.getDirection()

// 设置为垂直方向
component.setDirection('vertical')

// 获取大小
const size = component.getSize()

// 设置大小为大
component.setSize('large')
```
