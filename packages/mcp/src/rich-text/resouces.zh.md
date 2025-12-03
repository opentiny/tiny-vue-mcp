# RichText 组件工具

## 功能描述
RichText 组件工具提供了富文本编辑器的操作功能。

## 可用工具

### 1. getContent
获取内容

**参数：** 'html' | 'text' （可选）

**返回值：** `{ type: 'text', text: '{"content": string, "format": string}' }`

### 2. setContent
设置内容

**参数：** HTML 字符串

**返回值：** `{ type: 'text', text: 'Content updated' }`

### 3. getText
获取纯文本

**参数：** 无

**返回值：** `{ type: 'text', text: '{"text": string}' }`

### 4. getLength
获取内容长度

**参数：** 无

**返回值：** `{ type: 'text', text: '{"length": number}' }`

## 使用示例

```javascript
// 获取HTML内容
const content = component.getContent('html')

// 设置内容
component.setContent('<p>Hello World</p>')

// 获取纯文本
const text = component.getText()

// 获取长度
const length = component.getLength()
```
