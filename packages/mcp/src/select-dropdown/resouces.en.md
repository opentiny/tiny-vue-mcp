# SelectDropdown Component Tools

## Description
SelectDropdown component tools provide operation functions for selection dropdown menus.

## Available Tools

### 1. open
Open the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Dropdown opened' }`

### 2. close
Close the dropdown menu

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Dropdown closed' }`

### 3. getOptions
Get the list of options

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"options":[...], "count": number}' }`

### 4. selectOption
Select an option

**Parameters:** Option object

**Returns:** `{ type: 'text', text: 'Option selected' }`

## Usage Example

```javascript
// Open dropdown menu
component.open()

// Get options
const options = component.getOptions()

// Select option
component.selectOption({ label: 'Option 1', value: 'opt1' })

// Close dropdown menu
component.close()
```
