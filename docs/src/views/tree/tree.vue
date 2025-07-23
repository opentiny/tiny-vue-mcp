<template>
  <div class="ecs-container">
    <tiny-tree
      :tiny_mcp_config="{
        server,
        business: {
          id: 'cpu-tree',
          description: 'CPU规格的树'
        }
      }"
      node-key="id"
      :data="data"
      show-checkbox
      highlight-current
      :default-expanded-keys="['1']"
      :check-on-click-node="true"
      :expand-on-click-node="false"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { createInMemoryTransport, createServer } from '@opentiny/next-sdk'
const data = ref([
  {
    id: '1',
    label: '操作系统',
    children: [
      {
        id: '2',
        label: ' windows',
        children: [
          { id: '3', label: ' windows 10' },
          { id: '4', label: ' windows 11' },
          { id: '5', label: ' windows 12' },
          { id: '7', label: ' windows 13' }
        ]
      },
      {
        id: '8',
        label: 'linux',
        children: [
          { id: '9', label: 'linux 10' },
          { id: '10', label: 'linux 11' },
          { id: '11', label: 'linux 12' },
          { id: '12', label: 'linux 13' }
        ]
      },
      { id: '13', label: 'macos' },
      { id: '14', label: 'harmonyOS' }
    ]
  }
])

const server = createServer(
  {
    name: 'tree-demo',
    version: '1.0.0'
  },
  {
    capabilities: {
      logging: {},
      resources: { subscribe: true, listChanged: true }
    }
  }
)

server.use(createInMemoryTransport())

onMounted(() => {
  server.connectTransport()
})
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  margin: 16px;
}

.checkbox-demo .tiny-tree {
  flex: 1;
  min-width: 300px;
}

.checkbox-demo div {
  margin-bottom: 8px;
}

.tip {
  font-weight: bold;
}
</style>
