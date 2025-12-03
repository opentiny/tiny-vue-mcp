# RichTextEditor Component MCP Tools

## Description

RichTextEditor is a rich text editing component supporting HTML, plain text and Markdown formats.

## Main Tools

### getContent
Get editor content

**Parameters**: Format - 'html' | 'text' | 'markdown'

**Returns**: 
```json
{
  "content": "",
  "format": "html"
}
```

### setContent
Set editor content

**Parameters**: Content string

**Returns**: Content updated message

### insertText
Insert text into the editor

**Parameters**: Text string

**Returns**: Text inserted successfully message

### clearContent
Clear editor content

**Parameters**: None

**Returns**: Content cleared message

### Usage

```typescript
const editor = ref(null)
const config = getRichTextEditorConfig()
const content = await config.tools.getContent.cb(editor.value, 'html')
```
