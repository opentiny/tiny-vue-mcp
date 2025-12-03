# ImageViewer 组件 MCP 工具

## 功能描述

ImageViewer 是一个图片查看器组件，用于展示和浏览图片。

## 主要工具

### getImages
获取所有图片

**参数**: 无

**返回**: 
```json
{
  "images": [...],
  "total": 0
}
```

### setImages
设置图片列表

**参数**: 图片URL数组

**返回**: 图片已设置消息

### goToImage
跳转到指定图片

**参数**: 图片索引

**返回**: 已跳转到第X张图片消息

### zoom
缩放图片

**参数**:
- `level`: 缩放级别 (0.1-10)

**返回**: 缩放级别已设置消息

### Usage

```typescript
const viewer = ref(null)
const config = getImageViewerConfig()
const images = await config.tools.getImages.cb(viewer.value)
```
