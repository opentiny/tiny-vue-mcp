import { createApp } from 'vue'
import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'
import { registerMcpConfig } from '@opentiny/vue-common'
import router from './router'
import App from './App.vue'
// tiny-robot 对话框
import '@opentiny/tiny-robot/dist/style.css'
import './style.css'

// 1、 将 TinyVue Mcp的工具注入到 vue-common 层中
registerMcpConfig(getTinyVueMcpConfig(), createMcpTools)

const app = createApp(App)
app.use(router)
app.mount('#app')
