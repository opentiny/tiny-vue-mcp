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

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { WebMcpServer } from '@opentiny/next-sdk'

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

const server = new WebMcpServer(
  {
    name: 'grid-demo',
    version: '1.0.0'
  },
  {
    capabilities: {
      logging: {},
      resources: { subscribe: true, listChanged: true }
    }
  }
)

onMounted(() => {
  server.connect(inject('transport') as any)
})
</script>

<style scoped></style>
