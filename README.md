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

### 如何体验？

体验方式有两种（环境变量和本地缓存，优先级：环境变量 > 本地缓存）：

1. 在 `docs/.env` 中配置 `VITE_LLM_API_KEY` (LLM大模型的API_KEY 目前只支持兼容OpenAI协议的大模型) 和 `VITE_LLM_URL` (LLM大模型的URL) 后，运行 `pnpm dev` 即可体验。
2. 如果不想配置环境变量，页面启动后会提示用户填写LLM信息，填写后会自动保存到本地缓存，下次启动时会自动加载（如果填写的api_key和url不正确，请清空本地缓存后刷新页面）。

![填写LLM信息](/docs/public/llm.png)
