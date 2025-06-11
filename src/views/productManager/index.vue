<template>
  <div class="products-page">
    <div class="page-header">
      <h3>商品管理</h3>
    </div>
    <div class="page-content">
      <div class="button-box">
        <div class="button-box-left">
          <tiny-input
            v-model="searchQuery"
            placeholder="搜索商品名称"
            clearable
            :tiny_mcp_config="{
              server,
              business: {
                id: 'status-select',
                description: '商品状态的下拉框',
              },
            }"
          />
          <tiny-base-select
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="商品状态"
            clearable
            :tiny_mcp_config="{
              server,
              business: {
                id: 'category-select',
                description: '商品分类的下拉框',
              },
            }"
          >
          </tiny-base-select>
          <tiny-base-select
            v-model="categoryFilter"
            :options="categoryOptions"
            placeholder="商品分类"
            clearable
          >
          </tiny-base-select>
        </div>
        <div class="button-box-right">
          <tiny-button type="info" @click="addProductToEdit">
            添加商品
          </tiny-button>
          <tiny-button type="danger" @click="removeProduct">
            删除商品
          </tiny-button>
          <tiny-button type="success" @click="saveProduct"> 保存 </tiny-button>
        </div>
      </div>
      <tiny-grid
        auto-resize
        ref="gridRef"
        :data="displayProducts"
        :height="520"
        :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
        :tiny_mcp_config="{
          server,
          business: { id: 'product-list', description: '商品列表' },
        }"
      >
        <tiny-grid-column type="index" width="50" />
        <tiny-grid-column type="selection" width="50" />
        <tiny-grid-column title="商品图片" width="100">
          <template #default="{ row }">
            <tiny-image
              :src="row.image"
              :preview-src-list="[row.image]"
              class="product-image"
            />
          </template>
        </tiny-grid-column>

        <tiny-grid-column
          field="name"
          title="商品名称"
          :editor="{ component: 'input' }"
        />
        <tiny-grid-column
          field="price"
          :editor="{ component: 'input', attrs: { type: 'number' } }"
          title="价格"
        >
          <template #default="{ row }"> ¥{{ row.price }} </template>
        </tiny-grid-column>
        <tiny-grid-column
          field="stock"
          :editor="{ component: 'input', attrs: { type: 'number' } }"
          title="库存"
        />
        <tiny-grid-column
          field="category"
          :editor="{ component: 'select', options: categoryOptions }"
          title="分类"
        >
          <template #default="{ row }">
            {{ categoryLabels[row.category] }}
          </template>
        </tiny-grid-column>
        <tiny-grid-column
          field="status"
          :editor="{ component: 'select', options: statusOptions }"
          title="状态"
        >
          <template #default="{ row }">
            <tiny-tag :type="row.status === 'on' ? 'success' : 'warning'">
              {{ statusLabels[row.status] }}
            </tiny-tag>
          </template>
        </tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import productsData from "./productsData"; // 初始静态数据
import { $local } from "../../composable/utils";
import { type Product } from "../../env";
import { useNextServer } from "@opentiny/next-vue";

// 3、创建web应用所需的 McpServer 变量, 用于注册页面中的组件到系统中。
const { server } = useNextServer({
  serverInfo: { name: "company-list", version: "1.0.0" },
});

// 4、 模板中，在AI智能助手要操作的组件上， 去绑定 server 和 组件的 “业务描述”。  这样 AI就能关联mcp,并识别每个组件的业务定义了。

// 将初始静态数据存入localStorage，之后保存时，同步修改localStorage
if (!$local.products) {
  $local.products = productsData;
}
// 全局静态配置
const categoryOptions = ref([
  { label: "手机", value: "phones" },
  { label: "笔记本", value: "laptops" },
  { label: "平板", value: "tablets" },
]);

const categoryLabels: any = {
  phones: "手机",
  laptops: "笔记本",
  tablets: "平板",
};

const statusOptions = ref([
  { label: "上架", value: "on" },
  { label: "下架", value: "off" },
]);

const statusLabels: any = {
  on: "上架",
  off: "下架",
};

// 搜索变量
const searchQuery = ref("");
const statusFilter = ref("");
const categoryFilter = ref("");
const products = ref($local.products);

// 搜索后展示到表格的变量
const displayProducts = computed(() => {
  return products.value.filter((product: Product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesStatus =
      !statusFilter.value || product.status === statusFilter.value;
    const matchesCategory =
      !categoryFilter.value || product.category === categoryFilter.value;
    return matchesQuery && matchesStatus && matchesCategory;
  });
});

type GridType = InstanceType<typeof TinyGrid>;
const gridRef = ref<GridType | null>(null);

// 新增商品到编辑弹窗
const addProductToEdit = async () => {
  if (gridRef.value) {
    gridRef?.value?.insert({
      image:
        "https://img1.baidu.com/it/u=1559062020,1043707656&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
      price: 10000,
      stock: 100,
      category: "phones",
      status: "on",
    });
  }
};

// 提示后删除商品
const removeProduct = () => {
  const selectedRows = gridRef?.value?.getSelectRecords();
  if (selectedRows.length === 0) {
    TinyModal.confirm({
      message: "请选择要删除的商品",
      title: "删除商品",
      status: "warning",
    });
    return;
  }
  if (selectedRows.length > 0) {
    gridRef?.value?.removeSelecteds();
  }
};

// 获取表数据后，保存商品到localStorage
const saveProduct = () => {
  setTimeout(() => {
    const data = gridRef?.value?.getTableData();
    $local.products = data.tableData;
    TinyModal.message({
      message: "保存成功",
      status: "success",
    });
  }, 1000);
};
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
