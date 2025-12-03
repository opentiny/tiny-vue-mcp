# Split Component Tools

## Description
Split component tools provide operation functions for split panels.

## Available Tools

### 1. getDividerPosition
Get the divider position

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"position": number}' }`

### 2. setDividerPosition
Set the divider position

**Parameters:** Position percentage (0-100)

**Returns:** `{ type: 'text', text: 'Divider position set to ...%' }`

### 3. getMode
Get the split mode

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"mode": "horizontal" | "vertical"}' }`

### 4. setMode
Set the split mode

**Parameters:** 'horizontal' | 'vertical'

**Returns:** `{ type: 'text', text: 'Mode set to ...' }`

## Usage Example

```javascript
// Get position
const position = component.getDividerPosition()

// Set position
component.setDividerPosition(50)

// Get mode
const mode = component.getMode()

// Set to vertical split
component.setMode('vertical')
```
