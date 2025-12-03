# ScrollText Component Tools

## Description
ScrollText component tools provide operation functions for scrolling text.

## Available Tools

### 1. getText
Get the text

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"text": string}' }`

### 2. setText
Set the text

**Parameters:** Text string

**Returns:** `{ type: 'text', text: 'Text updated' }`

### 3. start
Start scrolling

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Text scrolling started' }`

### 4. stop
Stop scrolling

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Text scrolling stopped' }`

## Usage Example

```javascript
// Get text
const text = component.getText()

// Set text
component.setText('Scrolling text...')

// Start scrolling
component.start()

// Stop scrolling
component.stop()
```
