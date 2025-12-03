# DynamicScroller Component Tools

## Description
DynamicScroller component tools provide operation functions for dynamic scrollers.

## Available Tools

### 1. getItems
Get the list of items

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"items": number, "total": number}' }`

### 2. scrollToItem
Scroll to a specific item

**Parameters:** Item index

**Returns:** `{ type: 'text', text: 'Scrolled to item ...' }`

### 3. refresh
Refresh the scroller

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Scroller refreshed' }`

### 4. getScrollPosition
Get the scroll position

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"position": number}' }`

## Usage Example

```javascript
// Get number of items
const items = component.getItems()

// Scroll to item
component.scrollToItem(10)

// Refresh
component.refresh()

// Get scroll position
const position = component.getScrollPosition()
```
