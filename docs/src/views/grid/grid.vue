<template>
  <div class="ecs-container">
    <tiny-grid
      class="spec-grid"
      :auto-resize="true"
      :height="300"
      :tiny_mcp_config="{
        server,
        business: {
          id: 'cpu-list',
          description: 'CPU规格的表格'
        }
      }"
      :editConfig="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :columns="[
        { type: 'selection', width: 60 },
        { field: 'specName', title: '规格名称' },
        { field: 'price', title: '价格(元/小时)', sortable: true },
        {
          field: 'cpuMemory',
          title: 'vCPUs | 内存(GiB)',
          sortable: true
        },
        { field: 'cpuType', title: 'CPU型号', sortable: true },
        {
          field: 'bandwidth',
          title: '基准 / 最大带宽',
          sortable: true
        },
        {
          field: 'networkPackets',
          title: '内网收发包(pps)',
          sortable: true
        }
      ]"
      :data="tableData"
    ></tiny-grid>
  </div>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

const tableData = ref(
  Array.from({ length: 10 }, (_, index) => ({
    specName: `s2.large.${index + 1}`,
    cpuMemory: `${(index + 1) * 2}vCPUs | ${(index + 1) * 4}GiB`,
    cpuType: 'Intel Ice Lake',
    bandwidth: `${index + 1}Gbps / ${(index + 1) * 2}Gbps`,
    networkPackets: `${(index + 1) * 100000}`,
    price: Math.floor(Math.random() * 100) / 10 + 0.5
  }))
)

// 通过 inject 注入 mcpServer 对象
const { transport, setupRouterTool, done } = inject('mcpServer')
const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} }
const server = new McpServer({ name: 'base-config', version: '1.0.0' }, { capabilities })

// 添加切换路由的工具
setupRouterTool(server)

onMounted(async () => {
  await server.connect(transport)
  // 通过 done 方法通知主页面，当前子页面已加载完成
  done()
})
</script>

<style scoped></style>
