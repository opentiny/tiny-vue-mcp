# FileUpload 组件工具

## 描述
FileUpload（文件上传）组件的 MCP 工具集合。用于管理文件列表和上传操作。

## 工具列表

### getFileList
获取文件列表。

**参数**: 无

**返回值**: 
```json
[
  {
    "name": "filename",
    "size": "filesize"
  }
]
```

### clearFileList
清空文件列表。

**参数**: 无

**返回值**: `success`

### removeFile
删除指定文件。

**参数**:
- `filename` (string): 要删除的文件名

**返回值**: `success`
