# TimePanel Component Tools

## Description
TimePanel component tools provide operation functions for time selection panels.

## Available Tools

### 1. getTime
Get the current time

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"time": string|null}' }`

### 2. setTime
Set the time

**Parameters:** Time string

**Returns:** `{ type: 'text', text: 'Time set to ...' }`

### 3. getHour
Get the hour

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"hour": number}' }`

### 4. setHour
Set the hour

**Parameters:** Number (0-23)

**Returns:** `{ type: 'text', text: 'Hour set to ...' }`

## Usage Example

```javascript
// Get time
const time = component.getTime()

// Set time
component.setTime('14:30:00')

// Set hour
component.setHour(15)
```
