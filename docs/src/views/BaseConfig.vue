<template>
  <div class="ecs-container">
    <div class="timeline-container">
      <tiny-time-line
        :active="0"
        :horizontal="true"
        class="timeline"
        :data="[
          { name: '基础配置', route: '/base-config' },
          { name: '网络配置', route: '/net-config' },
          { name: '高级配置', route: '/advanced-config' },
          { name: '确认配置', route: '/confirm-config' },
        ]"
        @click="handleTimelineClick"
      ></tiny-time-line>
    </div>
    <div class="form-container">
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-form-item label="计费模式">
          <tiny-button-group
            v-model="state.billingMode"
            :data="[
              { text: '包年/包月', value: '1' },
              { text: '按需计费', value: '2' },
            ]"
          ></tiny-button-group>
        </tiny-form-item>
        <tiny-form-item label="区域">
          <tiny-button-group
            v-model="state.region"
            class="region-button-group"
            :data="[
              { text: '乌兰察布二零一', value: '1' },
              { text: '西南-贵阳一', value: '2' },
            ]"
          ></tiny-button-group>
          <span class="region-tip">温馨提示：页面左上角切换区域</span>
          <span class="region-desc"
            >不同区域的云服务产品之间内网互不相通；请就近选择靠近您业务的区域，可减少网络时延，提高访问速度</span
          >
        </tiny-form-item>
        <tiny-form-item label="可用区">
          <tiny-button-group
            v-model="state.availabilityZone"
            :data="[
              { text: '可用区1', value: '1' },
              { text: '可用区2', value: '2' },
              { text: '可用区3', value: '3' },
              { text: '随机分配', value: '4' },
            ]"
          ></tiny-button-group>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="form-container">
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-form-item label="CPU架构">
          <tiny-button-group
            v-model="state.cpuArchitecture"
            :data="[
              { text: 'x86计算', value: '1' },
              { text: '鲲鹏计算', value: '2' },
            ]"
          ></tiny-button-group>
        </tiny-form-item>
        <tiny-form-item label="区域">
          <div class="cpu-config-container">
            <div class="cpu-select-item">
              <span class="select-label">vCPUs</span>
              <tiny-base-select
                v-model="state.vcpus"
                placeholder="请选择"
                :tiny_mcp_config="{
                  server,
                  business: {
                    id: 'vCPUs',
                    description: '虚拟CPU个数的下拉框',
                  },
                }"
                ref="vcpusRef"
                :options="[
                  { value: '2', label: '2核' },
                  { value: '4', label: '4核' },
                  { value: '8', label: '8核' },
                  { value: '16', label: '16核' },
                  { value: '32', label: '32核' },
                ]"
              ></tiny-base-select>
            </div>
            <div class="cpu-select-item">
              <span class="select-label">内存</span>
              <tiny-base-select
                v-model="state.memory"
                placeholder="请选择"
                :options="[
                  { value: '4', label: '4GB' },
                  { value: '8', label: '8GB' },
                  { value: '16', label: '16GB' },
                  { value: '32', label: '32GB' },
                  { value: '64', label: '64GB' },
                ]"
              ></tiny-base-select>
            </div>
            <div class="cpu-select-item">
              <span class="select-label">规格名称</span>
              <tiny-search
                v-model="state.specName"
                placeholder="输入关键词"
                class="spec-search"
              ></tiny-search>
            </div>
          </div>
          <div class="spec-container">
            <tiny-grid
              class="spec-grid"
              :auto-resize="true"
              :height="300"
              ref="serverListGridRef"
              :tiny_mcp_config="{
                server,
                business: {
                  id: 'cpu-list',
                  description: 'CPU规格的表格',
                },
              }"
              :editConfig="{ trigger: 'click', mode: 'cell', showStatus: true }"
              :columns="[
                { type: 'selection', width: 60 },
                { field: 'specName', title: '规格名称' },
                { field: 'price', title: '价格(元/小时)', sortable: true },
                {
                  field: 'cpuMemory',
                  title: 'vCPUs | 内存(GiB)',
                  sortable: true,
                },
                { field: 'cpuType', title: 'CPU型号', sortable: true },
                {
                  field: 'bandwidth',
                  title: '基准 / 最大带宽',
                  sortable: true,
                },
                {
                  field: 'networkPackets',
                  title: '内网收发包(pps)',
                  sortable: true,
                },
              ]"
              :data="tableData"
            ></tiny-grid>
            <div class="current-spec">
              <span class="spec-label">当前规格</span>
              <span class="spec-value"
                >通用计算型 | s2.large.2 | 2vCPUs | 4 GiB</span
              >
            </div>
          </div>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="form-container">
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-form-item label="镜像">
          <tiny-button-group
            v-model="state.imageType"
            :data="[
              { text: '公共镜像', value: '1' },
              { text: '私有镜像', value: '2' },
              { text: '共享镜像', value: '3' },
            ]"
          ></tiny-button-group>
          <div class="image-select-container">
            <tiny-base-select
              v-model="state.osType"
              placeholder="请选择"
              class="image-select"
              :options="[
                { value: 'centos', label: 'CentOS' },
                { value: 'ubuntu', label: 'Ubuntu' },
                { value: 'windows', label: 'Windows Server' },
                { value: 'debian', label: 'Debian' },
              ]"
            ></tiny-base-select>
            <tiny-base-select
              v-model="state.imageVersion"
              placeholder="请选择"
              class="image-select-wide"
              :options="imageVersionOptions"
              :disabled="!state.osType"
            ></tiny-base-select>
          </div>
          <div class="image-tip">
            <span class="warning-text">请注意操作系统的语言类型。</span>
          </div>
          <tiny-grid
            class="image-grid"
            :auto-resize="true"
            :height="300"
            ref="serverListGridRef"
            :tiny_mcp_config="{
              server,
              business: {
                id: 'image-list',
                description: '镜像的表格',
              },
            }"
            :editConfig="{ trigger: 'click', mode: 'cell', showStatus: true }"
            :columns="[
              { type: 'selection', width: 60 },
              { field: 'imageName', title: '镜像名称' },
              { field: 'imageSize', title: '镜像大小', sortable: true },
              {
                field: 'imageType',
                title: '镜像类型',
                sortable: true,
              },
              { field: 'imageVersion', title: '镜像版本', sortable: true },
              { field: 'imageType', title: '镜像类型', sortable: true },
              { field: 'imageStatus', title: '镜像状态', sortable: true },
            ]"
            :data="imageList"
          ></tiny-grid>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="form-container">
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-form-item label="系统盘">
          <div class="disk-config">
            <tiny-base-select
              v-model="state.systemDiskType"
              placeholder="请选择"
              class="disk-select"
              :options="[
                { value: 'ssd', label: '通用型SSD' },
                { value: 'sas', label: 'SAS云硬盘' },
                { value: 'sata', label: 'SATA云硬盘' },
              ]"
            ></tiny-base-select>
            <tiny-numeric
              v-model="state.systemDiskSize"
              placeholder="请输入"
              class="disk-input"
            ></tiny-numeric>
            <span class="disk-tip">GiB IOPS上限240，IOPS突发上限5,000</span>
          </div>
        </tiny-form-item>
      </tiny-form>
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-form-item label="数据盘">
          <div
            v-for="(disk, index) in state.dataDisks"
            :key="index"
            class="data-disk-item"
          >
            <tiny-icon-panel-mini class="disk-icon"></tiny-icon-panel-mini>
            <tiny-base-select
              v-model="disk.type"
              placeholder="请选择"
              class="disk-select"
              :options="[
                { value: 'ssd', label: '通用型SSD' },
                { value: 'sas', label: 'SAS云硬盘' },
                { value: 'sata', label: 'SATA云硬盘' },
              ]"
            ></tiny-base-select>
            <tiny-numeric
              v-model="disk.size"
              placeholder="请输入"
              class="disk-input"
            ></tiny-numeric>
            <span class="disk-tip">GiB IOPS上限600，IOPS突发上限5,000</span>
            <tiny-numeric
              v-model="disk.iops"
              placeholder="请输入"
              class="disk-input"
            ></tiny-numeric>
            <tiny-icon-delete
              v-if="index > 0"
              class="delete-icon"
              @click="removeDataDisk(index)"
            ></tiny-icon-delete>
          </div>
          <div class="add-disk-container" @click="addDataDisk">
            <tiny-icon-plus class="add-icon"></tiny-icon-plus>
            <span class="add-text">增加一块数据盘</span>
            <span class="disk-limit">您还可以挂载 21 块磁盘（云硬盘）</span>
          </div>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="footer-container">
      <tiny-form
        labelWidth="80px"
        labelPosition="top"
        :inline="false"
        label-position="left"
        label-width="150px"
        class="form"
      >
        <tiny-row class="footer-row">
          <tiny-col :span="12">
            <tiny-row>
              <tiny-col :span="5" class="purchase-col">
                <span class="purchase-label">购买量</span>
                <tiny-numeric
                  v-model="state.purchaseCount"
                  placeholder="请输入"
                  class="purchase-input"
                ></tiny-numeric>
                <span>台</span>
              </tiny-col>
              <tiny-col :span="7">
                <div>
                  <span class="price-label">配置费用</span>
                  <span class="price-value">¥1.5776</span>
                  <span class="price-unit">/小时</span>
                </div>
                <div>
                  <span class="price-tip"
                    >参考价格，具体扣费请以账单为准。</span
                  >
                  <span class="price-detail">了解计费详情</span>
                </div>
              </tiny-col>
            </tiny-row>
          </tiny-col>
          <tiny-col :span="4" class="next-button-col">
            <tiny-button
              text="下一步: 网络配置"
              type="primary"
              round
              class="next-button"
              @click="$router.push('/net-config')"
            ></tiny-button>
          </tiny-col>
        </tiny-row>
      </tiny-form>
    </div>
  </div>
</template>

<script setup>
import { IconPanelMini, IconPlus, IconDelete } from "@opentiny/vue-icon";
import {
  TinyForm,
  TinyFormItem,
  TinyButtonGroup,
  TinyBaseSelect,
  TinyNumeric,
  TinySearch,
  TinyRow,
  TinyCol,
  TinyButton,
  TinyTimeLine,
  TinyGrid,
} from "@opentiny/vue";
import { reactive, computed, watch, onMounted, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const TinyIconPanelMini = IconPanelMini();
const TinyIconPlus = IconPlus();
const TinyIconDelete = IconDelete();
const $router = useRouter();
const vcpusRef = ref(null);
const serverListGridRef = ref(null);

window.serverListGridRef = serverListGridRef;

// 操作系统版本映射
const osVersions = {
  centos: [
    { value: "centos7", label: "CentOS 7.9 64bit" },
    { value: "centos8", label: "CentOS 8.4 64bit" },
    { value: "centos9", label: "CentOS 9.0 64bit" },
  ],
  ubuntu: [
    { value: "ubuntu18", label: "Ubuntu 18.04 64bit" },
    { value: "ubuntu20", label: "Ubuntu 20.04 64bit" },
    { value: "ubuntu22", label: "Ubuntu 22.04 64bit" },
  ],
  windows: [
    { value: "windows2016", label: "Windows Server 2016 数据中心版 64bit" },
    { value: "windows2019", label: "Windows Server 2019 数据中心版 64bit" },
    { value: "windows2022", label: "Windows Server 2022 数据中心版 64bit" },
  ],
  debian: [
    { value: "debian10", label: "Debian 10 64bit" },
    { value: "debian11", label: "Debian 11 64bit" },
  ],
};

// 先初始化state
const state = reactive({
  dataDisk: [1, 2, 3],
  billingMode: "1",
  region: "1",
  availabilityZone: "1",
  cpuArchitecture: "1",
  vcpus: "",
  memory: "",
  specName: "",
  imageType: "1",
  osType: "",
  imageVersion: "",
  systemDiskType: "",
  systemDiskSize: "",
  dataDisks: [
    {
      type: "",
      size: "",
      iops: "",
    },
  ],
  purchaseCount: 0,
});

const tableData = ref(
  Array.from({ length: 10 }, (_, index) => ({
    specName: `s2.large.${index + 1}`,
    cpuMemory: `${(index + 1) * 2}vCPUs | ${(index + 1) * 4}GiB`,
    cpuType: "Intel Ice Lake",
    bandwidth: `${index + 1}Gbps / ${(index + 1) * 2}Gbps`,
    networkPackets: `${(index + 1) * 100000}`,
    price: Math.floor(Math.random() * 100) / 10 + 0.5,
  }))
);

const imageList = ref(
  Array.from({ length: 10 }, (_, index) => ({
    imageName: `CentOS 7.9 64bit ${index + 1}`,
    imageType: "公共镜像",
    imageVersion: "1.0.0",
    imageSize: `${Math.floor(Math.random() * 100) + 10}GB`,
    imageStatus: "正常",
  }))
);

// 然后再定义计算属性
const imageVersionOptions = computed(() => {
  return state.osType ? osVersions[state.osType] || [] : [];
});

// 监听操作系统类型变化，重置版本选择
watch(
  () => state.osType,
  () => {
    state.imageVersion = "";
  }
);

// 添加数据盘的方法
const addDataDisk = () => {
  state.dataDisks.push({
    type: "",
    size: "",
    iops: "",
  });
};

// 删除数据盘的方法
const removeDataDisk = (index) => {
  state.dataDisks.splice(index, 1);
};

// 处理timeline点击事件
const handleTimelineClick = (index, item) => {
  if (item.route) {
    $router.push(item.route);
  }
};

// 通过 inject 注入 mcpServer 对象
const { transport, setupTool, setupRouterTool, done } = inject("mcpServer");
const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} };
const server = new McpServer(
  { name: "base-config", version: "1.0.0" },
  { capabilities }
);

server.resource();

window.mcpServer = server;
// 添加切换路由的工具
setupRouterTool(server);

// 定义子页面的工具
setupTool(server, state, "billingMode", "计费模式");
setupTool(server, state, "region", "区域");
setupTool(server, state, "availabilityZone", "可用区");

onMounted(async () => {
  await server.connect(transport);
  // 通过 done 方法通知主页面，当前子页面已加载完成
  done();
});
</script>

<style scoped>
.ecs-container {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}

.timeline-container {
  padding: 20px 0;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.timeline {
  border-radius: 0;
  max-width: 800px;
  margin: 0 auto;
}

.form-container {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

/* 为最后一个 form-container 添加更大的底部间距 */
.ecs-container > .form-container:nth-last-child(2) {
  margin-bottom: 120px;
}

.form-container:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.form {
  border-radius: 0;
}

.region-button-group {
  border-radius: 4px;
  margin-right: 10px;
}

.region-tip {
  color: #606266;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 0 8px;
}

.region-desc {
  display: block;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 8px;
}

.cpu-config-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cpu-select-item {
  display: flex;
  align-items: center;
  background: #f5f7fa;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  min-width: 300px;
}

.cpu-select-item:hover {
  background: #e4e7ed;
}

.select-label {
  width: 100px;
  color: #606266;
  font-size: 14px;
}

.spec-container {
  border-radius: 0;
  margin-top: 16px;
}

.spec-button-group {
  border-radius: 4px;
  margin-top: 16px;
}

.spec-grid {
  margin-top: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.current-spec {
  margin-top: 16px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
}

.spec-label {
  width: 150px;
  display: inline-block;
  color: #606266;
}

.spec-value {
  font-weight: 600;
  color: #303133;
}

.image-select-container {
  display: flex;
  margin-top: 16px;
  gap: 16px;
}

.image-select {
  width: 170px;
}

.image-select-wide {
  width: 340px;
}

.image-tip {
  margin-top: 12px;
}

.warning-text {
  color: #e6a23c;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.warning-text::before {
  content: "!";
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background: #e6a23c;
  color: #fff;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 12px;
}

.disk-config {
  display: flex;
  align-items: center;
  gap: 16px;
}

.disk-select {
  width: 200px;
}

.disk-input {
  width: 120px;
}

.disk-tip {
  color: #606266;
  font-size: 13px;
  background: #f5f7fa;
  padding: 4px 8px;
  border-radius: 4px;
}

.data-disk-item {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.data-disk-item:hover {
  background: #e4e7ed;
}

.disk-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  color: #606266;
}

.add-disk-container {
  display: flex;
  margin-top: 16px;
  align-items: center;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-disk-container:hover {
  background: #e4e7ed;
}

.add-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #409eff;
}

.add-text {
  font-size: 13px;
  color: #409eff;
  margin-right: 8px;
}

.disk-limit {
  color: #909399;
  font-size: 13px;
}

.footer-container {
  border-top: 1px solid #e4e7ed;
  padding: 20px;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  position: absolute;
  box-sizing: border-box;
  bottom: 20px;
  left: 0;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
}

.footer-row {
  width: 100%;
  display: flex;
  align-items: center;
}

.purchase-col {
  display: flex;
  align-items: center;
  gap: 8px;
}

.purchase-label {
  color: #606266;
  font-size: 14px;
}

.purchase-input {
  width: 120px;
}

.price-label {
  font-size: 13px;
  color: #606266;
}

.price-value {
  padding: 0 8px;
  color: #f56c6c;
  font-size: 16px;
  font-weight: 600;
}

.price-unit {
  font-size: 13px;
  color: #606266;
}

.price-tip {
  font-size: 13px;
  color: #909399;
}

.price-detail {
  font-size: 13px;
  color: #409eff;
  cursor: pointer;
  margin-left: 8px;
}

.price-detail:hover {
  text-decoration: underline;
}

.next-button-col {
  display: flex;
  justify-content: flex-end;
}

.next-button {
  min-width: 120px;
  height: 40px;
  font-size: 14px;
}

.spec-search {
  width: 200px;
  margin-left: 8px;
}

/* 当右侧面板收起时，footer-container的宽度需要调整 */
:deep(.right-panel.collapsed) ~ .footer-container {
  right: 0;
}
</style>
