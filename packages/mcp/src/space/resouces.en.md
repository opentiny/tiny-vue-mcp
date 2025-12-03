# Space Component Tools

## Description
Space component tools provide operation functions for spatial spacing layout.

## Available Tools

### 1. getDirection
Get the direction

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"direction": "horizontal" | "vertical"}' }`

### 2. setDirection
Set the direction

**Parameters:** 'horizontal' | 'vertical'

**Returns:** `{ type: 'text', text: 'Direction set to ...' }`

### 3. getSize
Get the spacing size

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"size": "small" | "medium" | "large"}' }`

### 4. setSize
Set the spacing size

**Parameters:** 'small' | 'medium' | 'large'

**Returns:** `{ type: 'text', text: 'Size set to ...' }`

## Usage Example

```javascript
// Get direction
const direction = component.getDirection()

// Set to vertical direction
component.setDirection('vertical')

// Get size
const size = component.getSize()

// Set size to large
component.setSize('large')
```
