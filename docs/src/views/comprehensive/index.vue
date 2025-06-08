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
        <tiny-button type="primary" class="button-box-right" round @click="addProductToEdit"> 添加商品 </tiny-button>
      </div>
      <tiny-grid
        auto-resize
        :data="displayProducts"
        :tiny_mcp_config="{
          server,
          business: {
            id: 'product-list',
            description: '商品列表'
          }
        }"
      >
        <tiny-grid-column type="index" width="50" />
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
              <tiny-button type="info" size="mini" round plain @click="handleEdit(row)"> 编辑 </tiny-button> <wbr />
              <tiny-button type="danger" size="mini" round plain @click="handleDelete(row)" style="margin-left: 8px">
                删除
              </tiny-button>
            </tiny-button-group>
          </template>
        </tiny-grid-column>
      </tiny-grid>
    </div>
  </div>

  <tiny-modal v-if="showEdit" v-model="showEdit" title="编辑产品" show-footer @confirm="handleProductSave()">
    <tiny-form ref="productFormRef" :model="editProduct" label-width="120px">
      <tiny-form-item label="商品名称" prop="name" required>
        <tiny-input v-model="editProduct.name" placeholder="请输入商品名称" />
      </tiny-form-item>
      <tiny-form-item label="价格" prop="price">
        <tiny-numeric v-model="editProduct.price" :min="0" placeholder="请输入价格" />
      </tiny-form-item>
      <tiny-form-item label="库存" prop="stock">
        <tiny-numeric v-model="editProduct.stock" :min="0" placeholder="请输入库存数量" />
      </tiny-form-item>
      <tiny-form-item label="分类" prop="category">
        <tiny-select v-model="editProduct.category" placeholder="请选择商品分类">
          <tiny-option label="手机" value="phones" />
          <tiny-option label="笔记本" value="laptops" />
          <tiny-option label="平板" value="tablets" />
        </tiny-select>
      </tiny-form-item>
      <tiny-form-item label="状态" prop="status">
        <tiny-select v-model="editProduct.status" placeholder="请选择商品状态">
          <tiny-option label="上架" value="on" />
          <tiny-option label="下架" value="off" />
        </tiny-select>
      </tiny-form-item>
    </tiny-form>
  </tiny-modal>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, computed } from 'vue'
import type { Product } from './types'
import productsData from './products.json'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { $local } from '../../composable/utils'
import { TinyModal } from '@opentiny/vue'
import { id } from 'zod/v4/locales'

if (!$local.products) {
  $local.products = productsData
}

const searchQuery = ref('')
const statusFilter = ref('')
const categoryFilter = ref('')
const products = ref($local.products)
const displayProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !statusFilter.value || product.status === statusFilter.value
    const matchesCategory = !categoryFilter.value || product.category === categoryFilter.value
    return matchesQuery && matchesStatus && matchesCategory
  })
})
// 编辑的商品
const editProduct = ref<Product | null>(null)
const showEdit = ref(false)
const productFormRef = ref(null)

const categoryLabels: Record<string, string> = {
  phones: '手机',
  laptops: '笔记本',
  tablets: '平板'
}
// 新增商品到编辑弹窗
const addProductToEdit = async () => {
  const product: Product = {
    name: '',
    price: 0,
    stock: 0,
    category: 'phones',
    status: 'off',
    image: 'https://img1.baidu.com/it/u=1559062020,1043707656&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
  }
  editProduct.value = product
  showEdit.value = true
}
// 处理编辑商品
const handleEdit = async (product: Product) => {
  editProduct.value = {...product}
  showEdit.value = true
}

const handleProductSave = async () => {
  productFormRef.value?.validate().then((valid: boolean) => {
    if (!valid) {
      TinyModal.alert('请填写完整的商品信息')
      return
    }
  })
  if (editProduct.value?.id) {
    // 更新现有商品
    const index = products.value.findIndex((p) => p.id === editProduct.value!.id)
    if (index !== -1) {
      products.value[index] = { ...editProduct.value, updatedAt: new Date().toISOString() }
    }
  } else {
    // 添加新商品
    products.value.push({...editProduct.value,
      id: Math.max(...products.value.map((p) => p.id)) + 1,
      createdAt: new Date().toISOString(),  
      updatedAt: new Date().toISOString()
    })
  }
  $local.products = products.value

  editProduct.value = null
  showEdit.value = false
}

// 处理删除商品
const handleDelete = async (product: Product) => {
  TinyModal.confirm({
    message: `您确定要删除商品 "${product.name}" 吗？`,
    title: '删除商品',
    status: 'warning',
    events: {
      confirm() {
        products.value = products.value.filter((p) => p.id !== product.id)
        $local.products = products.value
      }
    }
  })
}

// 通过 inject 注入 mcpServer 对象
const { transport, setupRouterTool, done } = inject('mcpServer')
const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} }
const server = new McpServer({ name: 'comprehensive-config', version: '1.0.0' }, { capabilities })

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
