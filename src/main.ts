import './assets/main.css'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'

const app = createApp(App)
console.log('环境变量：', import.meta.env);
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(ElementPlus)
app.mount('#app')
