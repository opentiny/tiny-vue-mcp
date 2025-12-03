# DateTable Component Tools

## Description
DateTable component tools provide operation functions for date tables.

## Available Tools

### 1. getSelectedDate
Get the selected date

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"date": string|null}' }`

### 2. setSelectedDate
Set the selected date

**Parameters:** Date string

**Returns:** `{ type: 'text', text: 'Date selected: ...' }`

### 3. getMonth
Get the current month

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"month": number}' }`

### 4. getDates
Get the list of dates

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"dates":[...], "total": number}' }`

## Usage Example

```javascript
// Get selected date
const date = component.getSelectedDate()

// Set date
component.setSelectedDate('2024-01-15')

// Get month
const month = component.getMonth()
```
