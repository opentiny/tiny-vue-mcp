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

### 使用cursor调试MCP配置

1. 启动 `docs` 后将 `sessionId` 拷贝到根目录 `.cursor` 目录下的 `mcp.json` 文件中 `sessionId` 位置
2. 在 `cursor` 聊天框设置为 `agent` 模式
3. 在 `agent` 模式下输入要操作组件的指令，如 `帮我选中最贵的cpu规格` 、 `帮我打开下拉面板` 等
4. 查看是否能正常操作组件，如果不能正常操作，请检查MCP配置的描述是否正确

### 使用copilot调试MCP配置

1. 启动 `docs` 后将 `sessionId` 拷贝到根目录 `.vscode` 目录下的 `mcp.json` 文件中 `sessionId` 位置
2. 在 `copilot` 聊天框设置为 `agent` 模式
3. 在 `agent` 模式下输入要操作组件的指令，如 `帮我选中最贵的cpu规格` 、 `帮我打开下拉面板` 等
4. 查看是否能正常操作组件，如果不能正常操作，请检查MCP配置的描述是否正确
