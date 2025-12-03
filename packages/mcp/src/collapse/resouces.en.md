# Collapse Component Tools

## Description
MCP tools for the Collapse (Accordion) component. Used to get, set, and manage the active state of accordion panels.

## Tools List

### getActiveNames
Get the list of currently active accordion panel names.

**Parameters**: None

**Return Value**: 
```json
{
  "activeNames": ["string"]
}
```

### setActiveNames
Set active accordion panels.

**Parameters**:
- `activeNames` (string[]): Array of panel names to activate

**Return Value**: `success`

### expand
Expand a specified accordion panel.

**Parameters**:
- `name` (string): Name of the panel to expand

**Return Value**: `success`

### collapse
Collapse a specified accordion panel.

**Parameters**:
- `name` (string): Name of the panel to collapse

**Return Value**: `success`
