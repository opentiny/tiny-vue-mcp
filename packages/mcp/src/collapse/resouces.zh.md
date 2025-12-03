# Collapse 组件工具

## 描述
Collapse（折叠面板）组件的 MCP 工具集合。用于获取、设置和管理折叠面板的活动状态。

## 工具列表

### getActiveNames
获取当前活跃的折叠面板名称列表。

**参数**: 无

**返回值**: 
```json
{
  "activeNames": ["string"]
}
```

### setActiveNames
设置活跃的折叠面板。

**参数**:
- `activeNames` (string[]): 要激活的面板名称数组

**返回值**: `success`

### expand
展开指定的折叠面板。

**参数**:
- `name` (string): 要展开的面板名称

**返回值**: `success`

### collapse
折叠指定的折叠面板。

**参数**:
- `name` (string): 要折叠的面板名称

**返回值**: `success`
