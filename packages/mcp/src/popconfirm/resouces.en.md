# Popconfirm Component MCP Tools

## Description

Popconfirm is a popover confirmation component for secondary confirmation of important operations.

## Main Tools

### show
Show confirmation dialog

**Parameters**: None

**Returns**: Confirmation dialog shown message

### hide
Hide confirmation dialog

**Parameters**: None

**Returns**: Confirmation dialog hidden message

### confirm
Confirm action

**Parameters**: None

**Returns**: Action confirmed message

### cancel
Cancel action

**Parameters**: None

**Returns**: Action cancelled message

### Usage

```typescript
const confirm = ref(null)
const config = getPopconfirmConfig()
await config.tools.show.cb(confirm.value)
```
