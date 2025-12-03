# DropdownMenu 组件工具

## 功能描述
DropdownMenu 组件工具提供了下拉菜单集合的操作功能。

## 可用工具

### 1. open
打开下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Menu opened' }`

### 2. close
关闭下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Menu closed' }`

### 3. getItems
获取菜单项列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"items":[...], "count": number}' }`

### 4. addItem
添加菜单项

**参数：** `{ label: string, value: any }`

**返回值：** `{ type: 'text', text: 'Item added: ...' }`

## 使用示例

```javascript
// 打开菜单
component.open()

// 获取菜单项
const items = component.getItems()

// 添加菜单项
component.addItem({ label: 'Option 1', value: 'opt1' })

// 关闭菜单
component.close()
```
