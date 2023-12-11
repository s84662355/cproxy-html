/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 10:22:08
 * @LastEditTime: 2023-10-13 10:15:19
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// UI框架
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import pxtovw from 'postcss-px-to-viewport'
// 适配尺寸
const loder_pxtovw = pxtovw({
  mediaQuery: false,
  unitToConvert: 'px',
  viewportWidth: 1366,
  viewportHeight: 960,
  unitPrecision: 5,
  viewportUnit: 'vw',
  selectirBlackList: ['wrap'],
  exclude: [/node_modules/]
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()]
    }),
    Components({
      resolvers:[ElementPlusResolver()]
    })
  ],
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/vars.scss';`
      }
    },
    // postcss:{
    //   plugins:[loder_pxtovw]
    // }
  },
  server:{
    open:true,
    cors: true,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 2000, // 可选，设置 chunk 文件大小的警告阈值
    cssCodeSplit: true,
    cssMinify: true,
    outDir: `./dist`,
    publicPath: '/',
    assetsDir:'./'
  }
})
