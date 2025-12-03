# RichTextEditor 组件 MCP 工具

## 功能描述

RichTextEditor 是一个富文本编辑器组件，支持HTML、纯文本和Markdown格式。

## 主要工具

### getContent
获取编辑器内容

**参数**: 格式 - 'html' | 'text' | 'markdown'

**返回**: 
```json
{
  "content": "",
  "format": "html"
}
```

### setContent
设置编辑器内容

**参数**: 内容字符串

**返回**: 内容已更新消息

### insertText
在编辑器中插入文本

**参数**: 文本字符串

**返回**: 文本插入成功消息

### clearContent
清除编辑器内容

**参数**: 无

**返回**: 内容已清除消息

### Usage

```typescript
const editor = ref(null)
const config = getRichTextEditorConfig()
const content = await config.tools.getContent.cb(editor.value, 'html')
```
