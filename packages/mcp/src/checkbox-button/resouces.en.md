# CheckboxButton Component Tools

## Description
CheckboxButton component tools provide operation functions for checkbox buttons.

## Available Tools

### 1. getValue
Get the checked state

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"value": boolean}' }`

### 2. setValue
Set the checked state

**Parameters:** Boolean value

**Returns:** `{ type: 'text', text: 'Value set to ...' }`

### 3. toggle
Toggle the checked state

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Toggled to ...' }`

### 4. getLabel
Get the label

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"label": string}' }`

## Usage Example

```javascript
// Get value
const value = component.getValue()

// Set to checked
component.setValue(true)

// Toggle state
component.toggle()

// Get label
const label = component.getLabel()
```
