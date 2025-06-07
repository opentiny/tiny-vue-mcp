<template>
  <div class="products-page">
    <div class="page-header">
      <h3>商品管理</h3>
    </div>
    <div class="page-content">
      <div class="button-box">
        <div class="button-box-left">
          <tiny-input v-model="searchQuery" placeholder="搜索商品名称" clearable />
          <tiny-select v-model="statusFilter" placeholder="商品状态" clearable>
            <tiny-option label="上架" value="on" />
            <tiny-option label="下架" value="off" />
          </tiny-select>
          <tiny-select v-model="categoryFilter" placeholder="商品分类" clearable>
            <tiny-option label="手机" value="phones" />
            <tiny-option label="笔记本" value="laptops" />
            <tiny-option label="平板" value="tablets" />
          </tiny-select>
        </div>
        <tiny-button type="primary" class="button-box-right" round @click="$router.push('/products/add')">
          添加商品
        </tiny-button>
      </div>
      <tiny-grid
        :data="products"
        height="560"
        :tiny_mcp_config="{
          server,
          business: {
            id: 'product-list',
            description: '商品列表'
          }
        }"
      >
        <tiny-grid-column type="selection" width="50" />
        <tiny-grid-column title="商品图片" width="100">
          <template #default="{ row }">
            <tiny-image :src="row.image" :preview-src-list="[row.image]" class="product-image" />
          </template>
        </tiny-grid-column>

        <tiny-grid-column field="name" title="商品名称" />
        <tiny-grid-column field="price" title="价格">
          <template #default="{ row }"> ¥{{ row.price }} </template>
        </tiny-grid-column>
        <tiny-grid-column field="stock" title="库存" />
        <tiny-grid-column field="category" title="分类">
          <template #default="{ row }">
            {{ categoryLabels[row.category] }}
          </template>
        </tiny-grid-column>
        <tiny-grid-column field="status" title="状态">
          <template #default="{ row }">
            <tiny-tag :type="row.status === 'on' ? 'success' : 'warning'">
              {{ row.status === 'on' ? '上架' : '下架' }}
            </tiny-tag>
          </template>
        </tiny-grid-column>

        <tiny-grid-column title="操作" width="200" fixed="right">
          <template #default="{ row }">
            <tiny-button-group>
              <tiny-button type="info" size="mini" round plain>
                <template #icon>
                  <tiny-icon name="edit" />
                </template>
                编辑
              </tiny-button>
              <tiny-button type="danger" size="mini" round plain @click="handleDelete(row)">
                <template #icon>
                  <tiny-icon name="delete" />
                </template>
                删除
              </tiny-button>
            </tiny-button-group>
          </template>
        </tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import type { Product } from './types'
import productsData from './products.json'
import { TinyModal } from '@opentiny/vue'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

const searchQuery = ref('')
const statusFilter = ref('')
const categoryFilter = ref('')
const products = ref(productsData)

const categoryLabels: Record<string, string> = {
  phones: '手机',
  laptops: '笔记本',
  tablets: '平板'
}

// 处理删除商品
const handleDelete = async (product: Product) => {
  TinyModal.confirm({
    message: `您确定要删除商品 "${product.name}" 吗？`,
    title: '删除商品',
    status: 'warning',
    events: {
      confirm() {}
    }
  })
}

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

<style scoped lang="less">
.products-page {
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    height: 32px;
  }
}

.button-box {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  justify-content: space-between;
}
.button-box-left {
  display: flex;
  gap: 8px;
}

.loading-state {
  padding: 20px;
}

.product-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.page-content {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.03);
}
</style>
