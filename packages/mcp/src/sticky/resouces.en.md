# Sticky Component Tools

## Description
Sticky component tools provide operation functions for sticky positioned elements.

## Available Tools

### 1. getOffset
Get the offset

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"offset": number}' }`

### 2. setOffset
Set the offset

**Parameters:** Offset in pixels

**Returns:** `{ type: 'text', text: 'Offset set to ...px' }`

### 3. isSticky
Check if sticky positioning

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"sticky": boolean}' }`

### 4. getZIndex
Get the z-index

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"zIndex": number}' }`

## Usage Example

```javascript
// Get offset
const offset = component.getOffset()

// Set offset
component.setOffset(10)

// Check sticky positioning
const isSticky = component.isSticky()

// Get z-index
const zIndex = component.getZIndex()
```
