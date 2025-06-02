<template>
  <div class="net-config-container">
    <div class="timeline-container">
      <tiny-time-line :active="1" :horizontal="true" class="timeline" :data="[
        { name: '基础配置', route: '/base-config' },
        { name: '网络配置', route: '/net-config' },
        { name: '高级配置', route: '/advanced-config' },
        { name: '确认配置', route: '/confirm-config' }
      ]" @click="handleTimelineClick"></tiny-time-line>
    </div>
    <div class="form-container">
      <tiny-form :model="formData" label-width="120px">
        <!-- 网络配置 -->
        <tiny-form-item label="网络配置">
          <tiny-radio-group v-model="formData.networkType">
            <tiny-radio label="auto">自动分配</tiny-radio>
            <tiny-radio label="manual">手动分配</tiny-radio>
          </tiny-radio-group>
        </tiny-form-item>

        <!-- 虚拟私有云 -->
        <tiny-form-item label="虚拟私有云">
          <tiny-select v-model="formData.vpc" placeholder="请选择虚拟私有云">
            <tiny-option v-for="item in vpcOptions" :key="item.value" :label="item.label" :value="item.value" />
          </tiny-select>
        </tiny-form-item>

        <!-- 子网 -->
        <tiny-form-item label="子网">
          <tiny-select v-model="formData.subnet" placeholder="请选择子网">
            <tiny-option v-for="item in subnetOptions" :key="item.value" :label="item.label" :value="item.value" />
          </tiny-select>
        </tiny-form-item>

        <!-- 安全组 -->
        <tiny-form-item label="安全组">
          <tiny-select v-model="formData.securityGroup" placeholder="请选择安全组">
            <tiny-option v-for="item in securityGroupOptions" :key="item.value" :label="item.label" :value="item.value" />
          </tiny-select>
        </tiny-form-item>

        <!-- 弹性IP -->
        <tiny-form-item label="弹性IP">
          <tiny-radio-group v-model="formData.eipType">
            <tiny-radio label="none">不使用</tiny-radio>
            <tiny-radio label="new">新创建</tiny-radio>
            <tiny-radio label="existing">使用已有</tiny-radio>
          </tiny-radio-group>
        </tiny-form-item>

        <!-- 弹性公网IP配置 -->
        <template v-if="formData.eipType !== 'none'">
          <!-- 线路类型 -->
          <tiny-form-item label="线路类型">
            <tiny-radio-group v-model="formData.lineType">
              <tiny-radio label="bgp">BGP</tiny-radio>
              <tiny-radio label="ctcc">中国电信</tiny-radio>
              <tiny-radio label="cmcc">中国移动</tiny-radio>
              <tiny-radio label="cucc">中国联通</tiny-radio>
            </tiny-radio-group>
          </tiny-form-item>

          <!-- 公网带宽 -->
          <tiny-form-item label="公网带宽">
            <tiny-radio-group v-model="formData.bandwidthType">
              <tiny-radio label="fixed">固定带宽</tiny-radio>
              <tiny-radio label="dynamic">动态带宽</tiny-radio>
            </tiny-radio-group>
          </tiny-form-item>

          <!-- 带宽大小 -->
          <tiny-form-item label="带宽大小">
            <tiny-input v-model="formData.bandwidthSize" placeholder="请输入带宽大小">
              <template #append>Mbit/s</template>
            </tiny-input>
            <div class="bandwidth-tip">
              <span>带宽范围：1-2000 Mbit/s</span>
              <span v-if="formData.bandwidthType === 'dynamic'" class="dynamic-tip">（动态带宽模式下，带宽大小可随时调整）</span>
            </div>
          </tiny-form-item>

          <!-- 计费方式 -->
          <tiny-form-item label="计费方式">
            <tiny-radio-group v-model="formData.billingType">
              <tiny-radio label="traffic">按流量计费</tiny-radio>
              <tiny-radio label="bandwidth">按带宽计费</tiny-radio>
            </tiny-radio-group>
            <div class="billing-tip">
              <span v-if="formData.billingType === 'traffic'">按实际使用流量计费，适合流量波动较大的场景</span>
              <span v-else>按固定带宽计费，适合流量稳定的场景</span>
            </div>
          </tiny-form-item>

          <!-- 使用已有弹性IP时的选择 -->
          <tiny-form-item v-if="formData.eipType === 'existing'" label="选择已有弹性IP">
            <tiny-select v-model="formData.existingEip" placeholder="请选择已有弹性IP">
              <tiny-option v-for="item in existingEipOptions" :key="item.value" :label="item.label" :value="item.value" />
            </tiny-select>
          </tiny-form-item>

          <!-- 扩展网卡配置 -->
          <tiny-form-item label="扩展网卡">
            <div class="extended-nic-container">
              <div v-for="(nic, index) in formData.extendedNics" :key="index" class="nic-item">
                <div class="nic-header">
                  <span class="nic-title">扩展网卡 {{ index + 1 }}</span>
                  <tiny-icon-delete v-if="index > 0" class="delete-icon" @click="removeNic(index)"></tiny-icon-delete>
                </div>
                <div class="nic-content">
                  <tiny-form-item label="子网" class="nic-form-item">
                    <tiny-select v-model="nic.subnet" placeholder="请选择子网">
                      <tiny-option v-for="item in subnetOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </tiny-select>
                  </tiny-form-item>
                  <tiny-form-item label="安全组" class="nic-form-item">
                    <tiny-select v-model="nic.securityGroup" placeholder="请选择安全组">
                      <tiny-option v-for="item in securityGroupOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </tiny-select>
                  </tiny-form-item>
                </div>
              </div>
              <div class="add-nic-container" @click="addNic">
                <tiny-icon-plus class="add-icon"></tiny-icon-plus>
                <span class="add-text">增加一块扩展网卡</span>
                <span class="nic-limit">您还可以添加 {{ 5 - formData.extendedNics.length }} 块扩展网卡</span>
              </div>
            </div>
          </tiny-form-item>
        </template>
      </tiny-form>
    </div>
    <div class="footer-container">
      <tiny-form label-width="150px" label-position="left" :inline="false" class="form">
        <tiny-row class="footer-row">
          <tiny-col :span="12">
            <tiny-row>
              <tiny-col :span="7">
                <div>
                  <span class="price-label">配置费用</span>
                  <span class="price-value">¥0.00</span>
                  <span class="price-unit">/小时</span>
                </div>
                <div>
                  <span class="price-tip">参考价格，具体扣费请以账单为准。</span>
                  <span class="price-detail">了解计费详情</span>
                </div>
              </tiny-col>
            </tiny-row>
          </tiny-col>
          <tiny-col :span="4" class="next-button-col">
            <tiny-button text="下一步: 高级配置" type="primary" round class="next-button"></tiny-button>
          </tiny-col>
        </tiny-row>
      </tiny-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
import { IconPlus, IconDelete } from '@opentiny/vue-icon'
import { useRouter } from 'vue-router'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

const TinyIconPlus = IconPlus()
const TinyIconDelete = IconDelete()
const $router = useRouter()

// 表单数据
const formData = reactive({
  networkType: 'auto',
  vpc: '',
  subnet: '',
  securityGroup: '',
  eipType: 'existing',
  lineType: 'bgp',
  bandwidthType: 'fixed',
  bandwidthSize: 1,
  billingType: 'traffic',
  existingEip: '',
  extendedNics: [
    {
      subnet: '',
      securityGroup: ''
    }
  ]
})

// 模拟数据
const vpcOptions = ref([
  { value: 'vpc-1', label: 'vpc-default' },
  { value: 'vpc-2', label: 'vpc-2' }
])

const subnetOptions = ref([
  { value: 'subnet-1', label: 'subnet-default' },
  { value: 'subnet-2', label: 'subnet-2' }
])

const securityGroupOptions = ref([
  { value: 'sg-1', label: '安全组-1' },
  { value: 'sg-2', label: '安全组-2' }
])

const existingEipOptions = ref([
  { value: 'eip-1', label: '192.168.1.1' },
  { value: 'eip-2', label: '192.168.1.2' }
])

// 添加扩展网卡
const addNic = () => {
  if (formData.extendedNics.length < 5) {
    formData.extendedNics.push({
      subnet: '',
      securityGroup: ''
    })
  }
}

// 删除扩展网卡
const removeNic = index => {
  formData.extendedNics.splice(index, 1)
}

// 处理timeline点击事件
const handleTimelineClick = (index, item) => {
  if (item.route) {
    $router.push(item.route)
  }
}

onMounted(async () => {
  // 通过 inject 注入 mcpServer 对象
  const { transport, setupTool, setupRouterTool, done } = inject('mcpServer')
  const capabilities = { prompts: {}, resources: {}, tools: {}, logging: {} }
  const server = new McpServer({ name: 'net-config', version: '1.0.0' }, { capabilities })

  // 添加切换路由的工具
  setupRouterTool(server)

  // 定义子页面的工具
  setupTool(server, formData, 'vpc', '虚拟私有云')
  setupTool(server, formData, 'subnet', '子网')

  if (import.meta.env.MODE !== 'solo') {
    // 由于是在 iframe 里嵌入帮助文档网站，需要等待帮助文档的 client 连接
    await transport.listen()
  }
  await server.connect(transport)
  // 通过 done 方法通知主页面，当前子页面已加载完成
  done()
})
</script>

<style scoped>
.net-config-container {
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
  margin-bottom: 100px;
}

.form-container:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.unit {
  margin-left: 8px;
  color: #666;
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

/* 为最后一个 form-container 添加更大的底部间距 */
.net-config-container>.form-container:last-child {
  margin-bottom: 120px;
}

/* 当右侧面板收起时，footer-container的宽度需要调整 */
:deep(.right-panel.collapsed)~.footer-container {
  right: 0;
}

.bandwidth-tip {
  margin-top: 8px;
  color: #606266;
  font-size: 13px;
}

.dynamic-tip {
  color: #e6a23c;
  margin-left: 8px;
}

.billing-tip {
  margin-top: 8px;
  color: #606266;
  font-size: 13px;
}

.extended-nic-container {
  width: 100%;
}

.nic-item {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  background: #f5f7fa;
}

.nic-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.nic-title {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.delete-icon {
  color: #f56c6c;
  cursor: pointer;
}

.nic-content {
  display: flex;
  gap: 16px;
}

.nic-form-item {
  flex: 1;
}

.add-nic-container {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-nic-container:hover {
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

.nic-limit {
  color: #909399;
  font-size: 13px;
}
</style>
