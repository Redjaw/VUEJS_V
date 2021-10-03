import { createApp } from 'vue'
import App from './App.vue'
import router from './App.router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/bootstrap.min.css'

createApp(App)
    .use(router)
    .use(VueAxios,axios)
    .mount('#app')
