# RecycleScroller Component Tools

## Description
RecycleScroller component tools provide operation functions for recycle scrollers.

## Available Tools

### 1. getItems
Get the list of items

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"items": number, "total": number}' }`

### 2. scrollToItem
Scroll to a specific item

**Parameters:** Item index

**Returns:** `{ type: 'text', text: 'Scrolled to item ...' }`

### 3. reset
Reset the scroller

**Parameters:** None

**Returns:** `{ type: 'text', text: 'Scroller reset' }`

### 4. getFirstVisibleIndex
Get the index of the first visible item

**Parameters:** None

**Returns:** `{ type: 'text', text: '{"index": number}' }`

## Usage Example

```javascript
// Get number of items
const items = component.getItems()

// Scroll to item
component.scrollToItem(10)

// Reset
component.reset()

// Get first visible item index
const index = component.getFirstVisibleIndex()
```
