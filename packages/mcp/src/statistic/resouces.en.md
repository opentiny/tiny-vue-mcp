# Statistic Component Tools

## Description
Statistic component tools provide operation functions for statistics information.

## Available Tools

### 1. getValue
Get the statistic value

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"value": number}' }`

### 2. setValue
Set the statistic value

**Parameters:** Numeric value

**Returns:** `{ type: 'text', text: 'Value set to ...' }`

### 3. getTitle
Get the title

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"title": string}' }`

### 4. getPrefix
Get the prefix

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"prefix": string}' }`

## Usage Example

```javascript
// Get value
const value = component.getValue()

// Set value
component.setValue(100)

// Get title
const title = component.getTitle()

// Get prefix
const prefix = component.getPrefix()
```
