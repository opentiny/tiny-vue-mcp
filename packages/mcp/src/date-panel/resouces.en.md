# DatePanel Component Tools

## Description
DatePanel component tools provide operation functions for date selection panels.

## Available Tools

### 1. getDate
Get the currently selected date

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"date": string|null}' }`

### 2. setDate
Set the selected date

**Parameters:** Date string

**Returns:** `{ type: 'text', text: 'Date set to ...' }`

### 3. nextMonth
Switch to the next month

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Advanced to next month' }`

### 4. previousMonth
Switch to the previous month

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Moved to previous month' }`

## Usage Example

```javascript
// Get date
const date = component.getDate()

// Set date
component.setDate('2024-01-15')

// Next month
component.nextMonth()
```
