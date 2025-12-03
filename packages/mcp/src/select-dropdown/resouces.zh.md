# SelectDropdown 组件工具

## 功能描述
SelectDropdown 组件工具提供了选择下拉菜单的操作功能。

## 可用工具

### 1. open
打开下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Dropdown opened' }`

### 2. close
关闭下拉菜单

**参数：** 无

**返回值：** `{ type: 'text', text: 'Dropdown closed' }`

### 3. getOptions
获取选项列表

**参数：** 无

**返回值：** `{ type: 'text', text: '{"options":[...], "count": number}' }`

### 4. selectOption
选择选项

**参数：** 选项对象

**返回值：** `{ type: 'text', text: 'Option selected' }`

## 使用示例

```javascript
// 打开下拉菜单
component.open()

// 获取选项
const options = component.getOptions()

// 选择选项
component.selectOption({ label: 'Option 1', value: 'opt1' })

// 关闭下拉菜单
component.close()
```
