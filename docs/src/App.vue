<template>
  <StagewiseToolbar v-if="false" :config="stagewiseConfig" />
  <div class="header">
    <div style="color: cornflowerblue; margin-bottom: 30px">
      页面识别码：http://39.108.160.245/sse?sessionId={{ sessionID }}
    </div>
    <div class="qr-code">
      <tiny-qr-code :value="sessionUrl" :size="100" color='#1677ff'></tiny-qr-code>
    </div>
  </div>
  <div class="app-container">
    <!-- 主体内容区域 -->
    <div class="main-content">
      <router-view />
    </div>
    <div class="right-panel" :class="{ collapsed: !showTinyRobot }">
      <div class="right-panel-header">智能助手操作区</div>
      <tiny-robot-chat />
    </div>
    <IconAi @click="showTinyRobot = !showTinyRobot" class="style-settings-icon"></IconAi>
  </div>
</template>

<script setup lang="ts">
import { StagewiseToolbar } from '@stagewise/toolbar-vue'
import { ref, provide, onMounted } from 'vue'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { useRouter, useRoute } from 'vue-router'
import type { MessageChannelTransport, MessageChannelServerTransport } from '@opentiny/next'
import { createTransportPair, createSseProxy } from '@opentiny/next'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import '@opentiny/icons/style/all.css'
import TinyRobotChat from './components/tiny-robot-chat.vue'
import { globalConversation, showTinyRobot } from './composable/utils'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import CryptoJS from 'crypto-js'

const stagewiseConfig = {
  plugins: []
}

const sessionUrl = ref('placeholder')

// 为子路由页面封装 server 定义 tool 的方法
const setupTool = (server: McpServer, state: Record<string, any>, name: string, desc: string) => {
  server.tool(name, desc, { value: z.string() }, async ({ value }) => {
    state[name] = value
    return { content: [{ type: 'text', text: String(state[name]) }] }
  })
}

// 当子页面加载完成时，通过调用 done 方法通知主页面
const pageLoad = async () => {
  return new Promise((resolve) => {
    mcpServer.done = resolve
  })
}

// 为每个子页面都添加一个切换路由的工具
const setupRouterTool = (server: McpServer) => {
  const $router = useRouter()
  const $route = useRoute()

  server.tool('switchRouter', '切换路由', { value: z.string() }, async ({ value }) => {
    if ($route.path === value) {
      return { content: [{ type: 'text', text: value }] }
    }

    $router.push(value)
    await pageLoad()
    mcpServer.done = () => {}
    return { content: [{ type: 'text', text: value }] }
  })
}

// 通过 provide 注入 mcpServer 对象，供子页面使用
const mcpServer: {
  transport: MessageChannelTransport | MessageChannelServerTransport | null
  setupRouterTool: (server: McpServer) => void
  setupTool: (server: McpServer, state: Record<string, any>, name: string, desc: string) => void
  done: (value: unknown) => void
} = {
  transport: null,
  setupRouterTool,
  setupTool,
  done: () => {}
}

provide('mcpServer', mcpServer)
const sessionID = ref('')

// 使用量子纠缠的 transport，以便通过 Cursor/Copilot 等 MCP Host 进行控制
const [transport, clientTransport] = createTransportPair()
mcpServer.transport = transport

onMounted(async () => {
  const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} }
  const client = new Client({ name: 'ecs-console', version: '1.0.0' }, { capabilities })
  await client.connect(clientTransport)

  // 把量子纠缠的 client 客户端通过 SSE 代理传递给后端服务，创建孪生 client
  const { sessionId } = await createSseProxy({
    client,
    url: 'http://39.108.160.245/sse',
    token: ''
  })

  sessionID.value = sessionId
  globalConversation.sessionId = sessionId
  const encryptedId = CryptoJS.AES.encrypt(sessionId, 'secret-session-id').toString()


  const secretId = encodeURIComponent(encryptedId)
  sessionUrl.value = 'http://39.108.160.245?id=' + secretId;
})
</script>

<style scoped>
.header {
  width: calc(100% - 502px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
}

.qr-code {
  margin-right: 20px;
}

.app-container {
  display: flex;
  height: 100%;
  position: relative;
}

.main-content {
  padding: 10px 10px;
  height: 100%;
  width: calc(100% - 502px);
  position: relative;
}

.right-panel {
  width: 480px;
  height: 100%;
  position: relative;
  background: #fff;
  border-left: 1px solid #e4e7ed;
}

.right-panel.collapsed {
  width: 0;
  overflow: hidden;
}

.style-settings-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 24px;
  z-index: 30;
  cursor: pointer;
}
</style>
