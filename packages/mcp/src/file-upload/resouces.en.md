# FileUpload Component Tools

## Description
MCP tools for the FileUpload component. Used to manage file lists and upload operations.

## Tools List

### getFileList
Get the file list.

**Parameters**: None

**Return Value**: 
```json
[
  {
    "name": "filename",
    "size": "filesize"
  }
]
```

### clearFileList
Clear the file list.

**Parameters**: None

**Return Value**: `success`

### removeFile
Remove a specified file.

**Parameters**:
- `filename` (string): Name of the file to remove

**Return Value**: `success`
