# VirtualScrollBox Component Tools

## Description
VirtualScrollBox component tools provide operation functions for virtual scroll containers.

## Available Tools

### 1. getItems
Get the list of items

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"count": number, "total": number}' }`

### 2. scrollTo
Scroll to a specific position

**Parameters:** Position (number)

**Returns:** `{ type: 'text', text: 'Scrolled to position ...' }`

### 3. getViewportHeight
Get the viewport height

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"height": number}' }`

### 4. setViewportHeight
Set the viewport height

**Parameters:** Height (number)

**Returns:** `{ type: 'text', text: 'Viewport height set to ...' }`

## Usage Example

```javascript
// Get number of items
const items = component.getItems()

// Scroll to position
component.scrollTo(100)

// Get viewport height
const height = component.getViewportHeight()

// Set viewport height
component.setViewportHeight(400)
```
