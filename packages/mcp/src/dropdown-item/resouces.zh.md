# DropdownItem 组件工具

## 功能描述
DropdownItem 组件工具提供了单个菜单项的操作接口。

## 可用工具

### 1. getLabel
获取菜单项标签

**参数：** 无

**返回值：** `{ type: 'text', text: '{"label": string}' }`

### 2. setLabel
设置菜单项标签

**参数：** 标签文本

**返回值：** `{ type: 'text', text: 'Label set to ...' }`

### 3. isDisabled
检查菜单项是否禁用

**参数：** 无

**返回值：** `{ type: 'text', text: '{"disabled": boolean}' }`

### 4. setDisabled
设置菜单项禁用状态

**参数：** 布尔值

**返回值：** `{ type: 'text', text: 'Item disabled/enabled' }`

## 使用示例

```javascript
// 获取标签
const label = component.getLabel()

// 设置标签
component.setLabel('New Label')

// 禁用菜单项
component.setDisabled(true)
```
