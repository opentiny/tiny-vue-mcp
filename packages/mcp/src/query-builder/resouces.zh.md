# QueryBuilder 组件 MCP 工具

## 功能描述

QueryBuilder 是一个查询构建器组件，用于构建复杂的查询条件。

## 主要工具

### getQuery
获取查询字符串

**参数**: 无

**返回**: 
```json
{
  "query": ""
}
```

### setQuery
设置查询字符串

**参数**: 查询字符串

**返回**: 查询已设置消息

### addCondition
添加查询条件

**参数**:
- `field`: 字段名
- `operator`: 操作符
- `value`: 值

**返回**: 条件已添加消息

### executeQuery
执行查询

**参数**: 无

**返回**: 查询已执行消息

### Usage

```typescript
const builder = ref(null)
const config = getQueryBuilderConfig()
const query = await config.tools.getQuery.cb(builder.value)
```
