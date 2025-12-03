# VirtualScrollBox 组件工具

## 功能描述
VirtualScrollBox 组件工具提供了虚拟滚动容器的操作功能。

## 可用工具

### 1. getItems
获取项目列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"count": number, "total": number}' }`

### 2. scrollTo
滚动到指定位置

**参数：** 位置（数字）

**返回值：** `{ type: 'text', text: 'Scrolled to position ...' }`

### 3. getViewportHeight
获取视口高度

**参数：** 无

**返回值：** `{ type: 'text', text: '{"height": number}' }`

### 4. setViewportHeight
设置视口高度

**参数：** 高度（数字）

**返回值：** `{ type: 'text', text: 'Viewport height set to ...' }`

## 使用示例

```javascript
// 获取项目数
const items = component.getItems()

// 滚动到位置
component.scrollTo(100)

// 获取视口高度
const height = component.getViewportHeight()

// 设置视口高度
component.setViewportHeight(400)
```
