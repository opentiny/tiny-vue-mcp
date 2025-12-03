# DynamicScroller 组件工具

## 功能描述
DynamicScroller 组件工具提供了动态滚动器的操作功能。

## 可用工具

### 1. getItems
获取项目列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"items": number, "total": number}' }`

### 2. scrollToItem
滚动到指定项目

**参数：** 项目索引

**返回值：** `{ type: 'text', text: 'Scrolled to item ...' }`

### 3. refresh
刷新滚动器

**参数：** 无

**返回值：** `{ type: 'text', text: 'Scroller refreshed' }`

### 4. getScrollPosition
获取滚动位置

**参数：** 无

**返回值：** `{ type: 'text', text: '{"position": number}' }`

## 使用示例

```javascript
// 获取项目数
const items = component.getItems()

// 滚动到项目
component.scrollToItem(10)

// 刷新
component.refresh()

// 获取滚动位置
const position = component.getScrollPosition()
```
