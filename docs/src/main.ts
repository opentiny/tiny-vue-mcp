import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// tiny-robot 对话框
import '@opentiny/tiny-robot/dist/style.css'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
