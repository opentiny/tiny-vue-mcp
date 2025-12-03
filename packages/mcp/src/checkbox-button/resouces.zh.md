# CheckboxButton 组件工具

## 功能描述
CheckboxButton 组件工具提供了复选框按钮的操作功能。

## 可用工具

### 1. getValue
获取选中状态

**参数：** 无

**返回值：** `{ type: 'text', text: '{"value": boolean}' }`

### 2. setValue
设置选中状态

**参数：** 布尔值

**返回值：** `{ type: 'text', text: 'Value set to ...' }`

### 3. toggle
切换选中状态

**参数：** 无

**返回值：** `{ type: 'text', text: 'Toggled to ...' }`

### 4. getLabel
获取标签

**参数：** 无

**返回值：** `{ type: 'text', text: '{"label": string}' }`

## 使用示例

```javascript
// 获取值
const value = component.getValue()

// 设置为选中
component.setValue(true)

// 切换状态
component.toggle()

// 获取标签
const label = component.getLabel()
```
