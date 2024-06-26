import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
 const env= loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    server: {
      open: true,
      port: 8888,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'https://api-hmzs.itheima.net/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}}`),'')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
