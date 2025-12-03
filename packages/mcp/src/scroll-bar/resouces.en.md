# ScrollBar Component Tools

## Description
ScrollBar component tools provide operation functions for scrollbars.

## Available Tools

### 1. getPosition
Get the scroll position

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"position": number}' }`

### 2. setPosition
Set the scroll position

**Parameters:** Position percentage (0-100)

**Returns:** `{ type: 'text', text: 'Position set to ...%' }`

### 3. getSize
Get the scrollbar size

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"size": number}' }`

### 4. scroll
Scroll a specified distance

**Parameters:** `{ direction: 'up' | 'down', distance: number }`

**Returns:** `{ type: 'text', text: 'Scrolled ... by ...px' }`

## Usage Example

```javascript
// Get position
const position = component.getPosition()

// Set position
component.setPosition(50)

// Get size
const size = component.getSize()

// Scroll down
component.scroll({ direction: 'down', distance: 50 })
```
