<template>
  <div class="app-container">
    <div class="header"></div>
    <!-- 主体内容区域 -->
    <div class="main-content">
      <div style="color: cornflowerblue">
        页面识别码：http://39.108.160.245/sse?sessionId={{ sessionID }}
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from "vue";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { useRouter, useRoute } from "vue-router";
import type {
  MessageChannelTransport,
  MessageChannelServerTransport,
} from "@opentiny/next";
import { createTransportPair, createSseProxy } from "@opentiny/next";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import "@opentiny/icons/style/all.css";

// 为子路由页面封装 server 定义 tool 的方法
const setupTool = (
  server: McpServer,
  state: Record<string, any>,
  name: string,
  desc: string
) => {
  server.tool(name, desc, { value: z.string() }, async ({ value }) => {
    state[name] = value;
    return { content: [{ type: "text", text: String(state[name]) }] };
  });
};

// 当子页面加载完成时，通过调用 done 方法通知主页面
const pageLoad = async () => {
  return new Promise((resolve) => {
    mcpServer.done = resolve;
  });
};

// 为每个子页面都添加一个切换路由的工具
const setupRouterTool = (server: McpServer) => {
  const $router = useRouter();
  const $route = useRoute();

  server.tool(
    "switchRouter",
    "切换路由",
    { value: z.string() },
    async ({ value }) => {
      if ($route.path === value) {
        return { content: [{ type: "text", text: value }] };
      }

      $router.push(value);
      await pageLoad();
      mcpServer.done = () => {};
      return { content: [{ type: "text", text: value }] };
    }
  );
};

// 通过 provide 注入 mcpServer 对象，供子页面使用
const mcpServer: {
  transport: MessageChannelTransport | MessageChannelServerTransport | null;
  setupRouterTool: (server: McpServer) => void;
  setupTool: (
    server: McpServer,
    state: Record<string, any>,
    name: string,
    desc: string
  ) => void;
  done: (value: unknown) => void;
} = {
  transport: null,
  setupRouterTool,
  setupTool,
  done: () => {},
};

provide("mcpServer", mcpServer);
const sessionID = ref("");

// 使用量子纠缠的 transport，以便通过 Cursor/Copilot 等 MCP Host 进行控制
const [transport, clientTransport] = createTransportPair();
mcpServer.transport = transport;

onMounted(async () => {
  const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} };
  const client = new Client(
    { name: "ecs-console", version: "1.0.0" },
    { capabilities }
  );
  await client.connect(clientTransport);

  // 把量子纠缠的 client 客户端通过 SSE 代理传递给后端服务，创建孪生 client
  const { sessionId } = await createSseProxy({
    client,
    url: "http://39.108.160.245/sse",
  });

  sessionID.value = sessionId;
});
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100%;
  position: relative;
}

.main-content {
  flex: 1;
  padding: 10px 10px;
  transition: width 0.3s ease;
  height: 100%;
  position: relative;
}

.right-panel {
  width: 30%;
  height: 100%;
  position: relative;
  transition: width 0.3s ease;
  background: #fff;
  border-left: 1px solid #e4e7ed;
}

.right-panel.collapsed {
  width: 0;
  overflow: visible;
}

.panel-toggle {
  position: absolute;
  top: 50%;
  left: -16px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.help-doc-iframe {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

.text-lg {
  color: #333;
  font-size: 16px;
}
</style>
