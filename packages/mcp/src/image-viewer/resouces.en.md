# ImageViewer Component MCP Tools

## Description

ImageViewer is an image viewer component for displaying and browsing images.

## Main Tools

### getImages
Get all images

**Parameters**: None

**Returns**: 
```json
{
  "images": [...],
  "total": 0
}
```

### setImages
Set the image list

**Parameters**: Image URL array

**Returns**: Images set message

### goToImage
Jump to a specific image

**Parameters**: Image index

**Returns**: Navigated to image X message

### zoom
Zoom the image

**Parameters**:
- `level`: Zoom level (0.1-10)

**Returns**: Zoom level set message

### Usage

```typescript
const viewer = ref(null)
const config = getImageViewerConfig()
const images = await config.tools.getImages.cb(viewer.value)
```
