import {createApp } from 'vue'
import ElementPlus from 'element-plus'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

library.add(faUserSecret)
createApp(App)
    .use(router)
    .use(ElementPlus)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')