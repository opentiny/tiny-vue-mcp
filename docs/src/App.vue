<template>
  <div class="header"></div>
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
    <tiny-dialog-box
      v-model:visible="boxVisibility"
      :close-on-click-modal="false"
      title="请填写您的LLM信息"
      :show-close="false"
      width="30%"
    >
      <div>
        <tiny-form ref="formRef" :model="createData" label-width="120px">
          <tiny-form-item label="LLM URL" prop="llmUrl" :rules="{ required: true, messages: '必填', trigger: 'blur' }">
            <tiny-input v-model="createData.llmUrl"></tiny-input>
          </tiny-form-item>
          <tiny-form-item
            label="API Key"
            prop="llmApiKey"
            :rules="{ required: true, messages: '必填', trigger: 'blur' }"
          >
            <tiny-input v-model="createData.llmApiKey"></tiny-input>
          </tiny-form-item>
          <tiny-form-item>
            <tiny-button @click="submit" type="primary">保存</tiny-button>
          </tiny-form-item>
        </tiny-form>
      </div>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="ts">
import '@opentiny/icons/style/all.css'
import TinyRobotChat from './components/tiny-robot-chat.vue'
import { showTinyRobot } from './composable/utils'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import { provide, reactive, ref } from 'vue'
import { $local, isEnvLLMDefined, isLocalLLMDefined } from './composable/utils'
import { createMessageChannelServerTransport } from '@opentiny/next-sdk'

const boxVisibility = ref(false)
const formRef = ref()
const createData = reactive({
  llmUrl: $local.llmUrl || import.meta.env.VITE_LLM_URL,
  llmApiKey: $local.llmApiKey || import.meta.env.VITE_LLM_API_KEY
})

const submit = () => {
  formRef.value.validate().then(() => {
    $local.llmUrl = createData.llmUrl
    $local.llmApiKey = createData.llmApiKey
    boxVisibility.value = false
    window.location.reload()
  })
}

if (!isEnvLLMDefined && !isLocalLLMDefined) {
  boxVisibility.value = true
}

const transport = createMessageChannelServerTransport('endpoint')
transport.onerror = (error) => {
  console.error(`ECS MessageChannel ServerTransport error:`, error)
}

provide('transport', transport)
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
