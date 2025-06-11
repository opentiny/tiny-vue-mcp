import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TinyVueSingleResolver } from '@opentiny/unplugin-tiny-vue'

// https://vite.dev/config/
export default defineConfig(() => {
  // 加载 .env 文件中的环境变量
  dotenv.config({ path: '.env' })

  return {
    // 注入环境变量到前端代码
    define: {
      'process.env': { }
    },
    plugins: [
      vue(),
      Components({
        resolvers: [TinyVueSingleResolver]
      }),
      AutoImport({
        resolvers: [TinyVueSingleResolver]
      })
    ],
    server: {
      port: 8089,
      host: true,
      proxy: {
        // 代理 /agent 开头的请求到本地 8001 端口（AI Agent 服务）
        '/agent': {
          target: 'http://localhost:8001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/agent/, '')
        }
      }
    }
  }
})
