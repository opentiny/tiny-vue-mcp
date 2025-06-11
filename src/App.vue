<template>
  <div class="qr-code">
    <span>页面识别二维码， 请用手机扫码后，在浏览器中打开。 微信的浏览器可能没有语音功能，需要使用手机内置的浏览器访问。 </span>
    <tiny-qr-code
    :value="sessionUrl"
    :size="100"
    color="#1677ff"
    ></tiny-qr-code>
  </div>
  <div class="app-container">
    <!-- 主体内容区域 -->
    <div class="main-content">
      <router-view />
    </div>
    <div class="right-panel" :class="{ collapsed: !showTinyRobot }">
      <div class="right-panel-header">智能助手操作区</div>
      <tiny-robot-chat />
    </div>
    <IconAi
      @click="showTinyRobot = !showTinyRobot"
      class="style-settings-icon"
    ></IconAi>
  </div>
</template>

<script setup lang="ts">
import TinyRobotChat from "./components/tiny-robot-chat.vue";
import { showTinyRobot } from "./composable/utils";
import { IconAi } from "@opentiny/tiny-robot-svgs";
import { useNextClient } from "@opentiny/next-vue";
import { globalConversation } from "./composable/utils";
import { computed } from "vue";
import CryptoJS from "crypto-js";

// 2、创建 sessionId , 一个 ref<string> 的值, 并保存起来，智能助手会访问该变量进行通讯
const { sessionId } = useNextClient({
  clientInfo: { name: "my-project", version: "1.0.0" },
  proxyOptions: { url: "http://39.108.160.245/sse", token: "" },
});

globalConversation.sessionId = sessionId;

const sessionUrl = computed(() => {
  // 未创建session时
  if (!sessionId.value) return "no session";

  // 创建好 sessionId后，加密后拼接成 sessionUrl， 这样手机扫码后会连接这个Url页面
  const encryptedId = CryptoJS.AES.encrypt(sessionId.value, "secret-session-id" ).toString();

  return "http://39.108.160.245?id=" + encodeURIComponent(encryptedId);
});
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
  margin: 20px;
  display: flex;
  align-items: baseline;
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
