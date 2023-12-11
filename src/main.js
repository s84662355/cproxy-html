/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 10:22:08
 * @LastEditTime: 2023-10-12 16:08:26
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\main.js
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/lib/locale/lang/en'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import i18n from '@/i18n'
import ElementPlus from 'element-plus'
import tools from './utils/tools.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/index.scss'
 

const app = createApp(App)
app.use(tools)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus, {
  locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

 
app.config.globalProperties.$isLogin=false
app.config.globalProperties.$UserInfo=null

app.config.globalProperties.$SoftwareSetting={
        MinimizeOnClose: false,
        AutoLogin: true,
        StartTurnOn: false,
        Version: "",
        GOOS: ""
}
 

app.config.globalProperties.$DynamicsProxyCountry=[]
app.config.globalProperties.$DynamicsProxyCity=[]


app.config.globalProperties.$DynamicsProxy={
  isStartProxy:false,
  formData:null
  
}




app.config.globalProperties.$StaticProxyPageData={
  currentPage:1,
  total:0,
  tableData:[],
  agency:0,
  expire:0,
  proxyId:0,
  formData:{
     protocol:0,
     remark:"",
     country:'',
     network:'',
  } 
} 
 
app.mount('#app')
