# Tiny Vue MCP

这是一个提供TinyVue组件库MCP配置的monorepo项目。

## WebMCP 初始化

`getTinyVueMcpConfig()` 会在浏览器中自动调用 next-sdk 的 `initializeBuiltinWebMCP()`，注入 `document.modelContext` Polyfill 和桥接能力。应用无需创建 MCP Server / Client，也无需自行初始化 Polyfill：

```ts
import { registerMcpConfig } from '@opentiny/vue-common'
import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'

registerMcpConfig(getTinyVueMcpConfig(), createMcpTools)
```

组件的 `tiny_mcp_config` 只需传 `business` 信息。库内 `src/utils/defineTool.ts` 的 `ensureWebMcp()` 每个 document 仅初始化一次，SSR 跳过，初始化失败允许重试；未传 `server` 的工具注册也会确保运行环境就绪。显式传入 `server` 的旧注册方式仍兼容。

`createMcpTools()` 返回清理函数：WebMCP 分支通过 `AbortController` 注销，旧 Server 分支调用工具的 `remove()`。组件集成层需要在卸载时调用返回的清理函数；这需要 TinyVue 的 `vue-common` 配套支持，本仓库不会自动挂接 Vue 生命周期。

WebMCP 使用 JSON Schema 和 `execute` 回调注册工具，库内将已有 Zod 参数定义转换成 JSON Schema，并在执行前校验参数。调用方通过 `document.modelContext.getTools()` 获取工具对象，再执行：

```ts
const tools = await document.modelContext.getTools()
const tool = tools.find((item) => item.name === 'demo-grid_grid_component_tools')
const rawResult = await document.modelContext.executeTool(tool, JSON.stringify({ getTableData: true }))
```

调用者应使用发现接口返回的工具对象，并按 WebMCP 返回格式解码结果。本库负责工具注册和执行回调，`executeTool()` 由页面、Agent 或其他工具使用方调用。

运行适配层测试：`pnpm --filter @opentiny/tiny-vue-mcp test`。

参考：[initializeBuiltinWebMCP 官方文档](https://docs.opentiny.design/next-sdk/webmcp-sdk/global-tools.html)。

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
