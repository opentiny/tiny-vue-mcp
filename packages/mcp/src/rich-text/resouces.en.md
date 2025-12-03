# RichText Component Tools

## Description
RichText component tools provide operation functions for rich text editors.

## Available Tools

### 1. getContent
Get the content

**Parameters:** 'html' | 'text' (optional)

**Returns:** `{ type: 'text', text: '{"content": string, "format": string}' }`

### 2. setContent
Set the content

**Parameters:** HTML string

**Returns:** `{ type: 'text', text: 'Content updated' }`

### 3. getText
Get plain text

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"text": string}' }`

### 4. getLength
Get the content length

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"length": number}' }`

## Usage Example

```javascript
// Get HTML content
const content = component.getContent('html')

// Set content
component.setContent('<p>Hello World</p>')

// Get plain text
const text = component.getText()

// Get length
const length = component.getLength()
```
