# RecycleScroller 组件工具

## 功能描述
RecycleScroller 组件工具提供了回收滚动器的操作功能。

## 可用工具

### 1. getItems
获取项目列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"items": number, "total": number}' }`

### 2. scrollToItem
滚动到指定项目

**参数：** 项目索引

**返回值：** `{ type: 'text', text: 'Scrolled to item ...' }`

### 3. reset
重置滚动器

**参数：** 无

**返回值：** `{ type: 'text', text: 'Scroller reset' }`

### 4. getFirstVisibleIndex
获取第一个可见项的索引

**参数：** 无

**返回值：** `{ type: 'text', text: '{"index": number}' }`

## 使用示例

```javascript
// 获取项目数
const items = component.getItems()

// 滚动到项目
component.scrollToItem(10)

// 重置
component.reset()

// 获取第一个可见项索引
const index = component.getFirstVisibleIndex()
```
