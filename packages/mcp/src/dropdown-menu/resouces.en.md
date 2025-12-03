# DropdownMenu Component Tools

## Description
DropdownMenu component tools provide operation functions for dropdown menu collections.

## Available Tools

### 1. open
Open the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Menu opened' }`

### 2. close
Close the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Menu closed' }`

### 3. getItems
Get the list of menu items

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"items":[...], "count": number}' }`

### 4. addItem
Add a menu item

**Parameters:** `{ label: string, value: any }`

**Returns:** `{ type: 'text', text: 'Item added: ...' }`

## Usage Example

```javascript
// Open menu
component.open()

// Get menu items
const items = component.getItems()

// Add menu item
component.addItem({ label: 'Option 1', value: 'opt1' })

// Close menu
component.close()
```
