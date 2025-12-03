# Result 组件工具

## 描述
Result（结果）组件的 MCP 工具集合。用于管理结果状态。

## 工具列表

### getStatus
获取结果状态。

**参数**: 无

**返回值**: 
```json
{
  "status": "success|warning|error|404|500"
}
```

### setStatus
设置结果状态。

**参数**:
- `status` (string): 结果状态

**返回值**: `success`
