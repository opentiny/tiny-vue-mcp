# TimeSpinner Component Tools

## Description
TimeSpinner component tools provide operation functions for time adjustment.

## Available Tools

### 1. getTime
Get the current time

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"time": string|null}' }`

### 2. setTime
Set the time

**Parameters:** Time string

**Returns:** `{ type: 'text', text: 'Time set to ...' }`

### 3. increment
Increase the specified unit

**Parameters:** 'hour' | 'minute' | 'second'

**Returns:** `{ type: 'text', text: '... incremented' }`

### 4. decrement
Decrease the specified unit

**Parameters:** 'hour' | 'minute' | 'second'

**Returns:** `{ type: 'text', text: '... decremented' }`

## Usage Example

```javascript
// Get time
const time = component.getTime()

// Set time
component.setTime('14:30:00')

// Increase hour
component.increment('hour')

// Decrease minute
component.decrement('minute')
```
