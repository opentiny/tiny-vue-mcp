# Tiny Vue MCP

这是一个提供TinyVue组件库MCP配置的monorepo项目。

## 项目结构

```text
├── docs/               # 文档调试目录
├── packages/           # 包目录
│   └── mcp/     # 组件库MCP配置
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
# 开发模式
pnpm dev

# 构建所有包
pnpm build
```

### 开发流程

1. 在 `packages/mcp` 中开发MCP配置
2. 在 `docs` 中预览和测试MCP配置
3. 运行 `pnpm build` 构建MCP配置
