# ScrollText 组件工具

## 功能描述
ScrollText 组件工具提供了滚动文本的操作功能。

## 可用工具

### 1. getText
获取文本

**参数：** 无

**返回值：** `{ type: 'text', text: '{"text": string}' }`

### 2. setText
设置文本

**参数：** 文本字符串

**返回值：** `{ type: 'text', text: 'Text updated' }`

### 3. start
开始滚动

**参数：** 无

**返回值：** `{ type: 'text', text: 'Text scrolling started' }`

### 4. stop
停止滚动

**参数：** 无

**返回值：** `{ type: 'text', text: 'Text scrolling stopped' }`

## 使用示例

```javascript
// 获取文本
const text = component.getText()

// 设置文本
component.setText('Scrolling text...')

// 开始滚动
component.start()

// 停止滚动
component.stop()
```
