# Dropdown 组件工具

## 功能描述
Dropdown 组件工具提供了下拉菜单的交互操作。

## 可用工具

### 1. open
打开下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Dropdown opened' }`

### 2. close
关闭下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Dropdown closed' }`

### 3. getItems
获取下拉菜单项列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"items":[...], "count": number}' }`

### 4. selectItem
选择菜单项

**参数：** 菜单项对象

**返回值：** `{ type: 'text', text: 'Item selected successfully' }`

## 使用示例

```javascript
// 打开菜单
component.open()

// 获取菜单项
const items = component.getItems()

// 关闭菜单
component.close()
```
