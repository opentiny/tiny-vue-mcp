# Split 组件工具

## 功能描述
Split 组件工具提供了分割面板的操作功能。

## 可用工具

### 1. getDividerPosition
获取分割线位置

**参数：** 无

**返回值：** `{ type: 'text', text: '{"position": number}' }`

### 2. setDividerPosition
设置分割线位置

**参数：** 位置百分比（0-100）

**返回值：** `{ type: 'text', text: 'Divider position set to ...%' }`

### 3. getMode
获取分割模式

**参数：** 无

**返回值：** `{ type: 'text', text: '{"mode": "horizontal" | "vertical"}' }`

### 4. setMode
设置分割模式

**参数：** 'horizontal' | 'vertical'

**返回值：** `{ type: 'text', text: 'Mode set to ...' }`

## 使用示例

```javascript
// 获取位置
const position = component.getDividerPosition()

// 设置位置
component.setDividerPosition(50)

// 获取模式
const mode = component.getMode()

// 设置为垂直分割
component.setMode('vertical')
```
