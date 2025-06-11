import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// tiny-robot 对话框
import '@opentiny/tiny-robot/dist/style.css'
import './style.css'

import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'
import { registerMcpConfig } from '@opentiny/vue-common'

// 1、 将 TinyVue Mcp的工具注入到 vue-common 层中，之后应用可以TinyVue Mcp的功能
registerMcpConfig(getTinyVueMcpConfig(), createMcpTools)

const app = createApp(App)
app.use(router)
app.mount('#app')
