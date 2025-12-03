# DropdownItem Component Tools

## Description
DropdownItem component tools provide operation interfaces for individual menu items.

## Available Tools

### 1. getLabel
Get the menu item label

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"label": string}' }`

### 2. setLabel
Set the menu item label

**Parameters:** Label text

**Returns:** `{ type: 'text', text: 'Label set to ...' }`

### 3. isDisabled
Check if the menu item is disabled

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"disabled": boolean}' }`

### 4. setDisabled
Set the menu item disabled state

**Parameters:** Boolean value

**Returns:** `{ type: 'text', text: 'Item disabled/enabled' }`

## Usage Example

```javascript
// Get label
const label = component.getLabel()

// Set label
component.setLabel('New Label')

// Disable menu item
component.setDisabled(true)
```
