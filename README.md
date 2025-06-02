# Tiny Vue MCP

这是一个使用 pnpm workspace 管理的 Vue 3 组件库 monorepo 项目。

## 项目结构

```
├── apps/                # 应用目录
│   └── demo/           # 示例应用
├── packages/           # 包目录
│   └── components/     # 组件库
├── pnpm-workspace.yaml # 工作空间配置
└── package.json        # 根目录配置
```

## 开发指南

### 环境要求

- Node.js 16+
- pnpm 8+

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 开发命令

```bash
# 构建所有包
pnpm build

# 开发模式
pnpm dev

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 清理构建产物
pnpm clean
```

### 开发流程

1. 在 `packages/components` 中开发组件
2. 在 `apps/demo` 中预览和测试组件
3. 运行 `pnpm build` 构建组件库
4. 运行 `pnpm test` 执行测试（如果有）

## 使用指南

在项目中使用组件库：

```bash
pnpm add @tiny-vue/components
```

```vue
import { Component } from '@tiny-vue/components'
```
