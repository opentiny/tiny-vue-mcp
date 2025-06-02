import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      // 生成类型声明文件
      dts()
    ],
    // 库模式配置
    build: {
      lib: {
        entry: './index.ts'
      },
      rollupOptions: {
        external: ['zod'],
        input: ['index.ts'],
        output: [
          {
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true
          }
        ]
      }
    }
  }
})
