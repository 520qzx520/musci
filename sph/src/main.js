import { createApp } from 'vue'

import App from './App.vue'
//路由
import router from './router'

import './assets/css/normalize.css'

import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

const Vue = createApp(App)
Vue.use(router)
Vue.use(ElementPlus)

Vue.mount('#app')
