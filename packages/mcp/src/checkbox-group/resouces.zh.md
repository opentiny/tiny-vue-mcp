# CheckboxGroup 组件工具

## 功能描述
CheckboxGroup 组件工具提供了复选框组的操作功能。

## 可用工具

### 1. getValues
获取选中的所有值

**参数：** 无

**返回值：** `{ type: 'text', text: '{"values":[...], "count": number}' }`

### 2. setValues
设置选中的值

**参数：** 值数组

**返回值：** `{ type: 'text', text: 'Values set to ... items' }`

### 3. selectAll
选中所有项

**参数：** 无

**返回值：** `{ type: 'text', text: 'All items selected' }`

### 4. clearSelection
清除选中

**参数：** 无

**返回值：** `{ type: 'text', text: 'Selection cleared' }`

## 使用示例

```javascript
// 获取值
const values = component.getValues()

// 设置值
component.setValues(['opt1', 'opt2', 'opt3'])

// 全选
component.selectAll()

// 清除选中
component.clearSelection()
```
