<template>
  <StagewiseToolbar v-if="false" :config="stagewiseConfig" />
  <div class="header">
    <div style="color: cornflowerblue; margin-bottom: 30px">
      页面识别码：https://agent.icjs.ink/sse?sessionId={{ sessionId }}
    </div>
    <div class="qr-code">
      <tiny-qr-code :value="sessionUrl" :size="100" color="#1677ff"></tiny-qr-code>
    </div>
  </div>
  <div class="app-container">
    <!-- 主体内容区域 -->
    <div class="main-content">
      <Comprehensive />
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
import { ref, watch } from 'vue'
import '@opentiny/icons/style/all.css'
import TinyRobotChat from './components/tiny-robot-chat.vue'
import { globalConversation, showTinyRobot, $session } from './composable/utils'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import CryptoJS from 'crypto-js'
import { useNextClient } from '@opentiny/next-vue'
import Comprehensive from './views/comprehensive/index.vue'

const stagewiseConfig = {
  plugins: []
}

const sessionUrl = ref('placeholder')

/**
 * 如果想固定sessionId保持不变方便调试可以使用crypto.randomUUID()生成一个用来调试
 */

const { sessionId } = useNextClient({
  clientInfo: { name: 'my-project', version: '1.0.0' },
  proxyOptions: { url: 'http://www.opentiny.xyz/sse', token: '', sessionId: $session.sessionId }
})

watch(
  () => sessionId.value,
  (newVal) => {
    if (newVal) {
      globalConversation.sessionId = newVal
      $session.sessionId = newVal

      const encryptedId = CryptoJS.AES.encrypt(newVal, 'secret-session-id').toString()

      const secretId = encodeURIComponent(encryptedId)
      sessionUrl.value = 'http://www.opentiny.xyz?id=' + secretId
    }
  }
)
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
