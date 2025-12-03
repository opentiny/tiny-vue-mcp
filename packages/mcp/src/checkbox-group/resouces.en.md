# CheckboxGroup Component Tools

## Description
CheckboxGroup component tools provide operation functions for checkbox groups.

## Available Tools

### 1. getValues
Get all selected values

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"values":[...], "count": number}' }`

### 2. setValues
Set the selected values

**Parameters:** Array of values

**Returns:** `{ type: 'text', text: 'Values set to ... items' }`

### 3. selectAll
Select all items

**Parameters:** None

**Returns:** `{ type: 'text', text: 'All items selected' }`

### 4. clearSelection
Clear the selection

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Selection cleared' }`

## Usage Example

```javascript
// Get values
const values = component.getValues()

// Set values
component.setValues(['opt1', 'opt2', 'opt3'])

// Select all
component.selectAll()

// Clear selection
component.clearSelection()
```
