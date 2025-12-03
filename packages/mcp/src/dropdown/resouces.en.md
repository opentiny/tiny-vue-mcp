# Dropdown Component Tools

## Description
Dropdown component tools provide interactive operations for dropdown menus.

## Available Tools

### 1. open
Open the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Dropdown opened' }`

### 2. close
Close the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Dropdown closed' }`

### 3. getItems
Get the list of dropdown menu items

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"items":[...], "count": number}' }`

### 4. selectItem
Select a menu item

**Parameters:** Menu item object

**Returns:** `{ type: 'text', text: 'Item selected successfully' }`

## Usage Example

```javascript
// Open menu
component.open()

// Get menu items
const items = component.getItems()

// Close menu
component.close()
```
