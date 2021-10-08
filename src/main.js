import { createApp } from 'vue'
import App from './App.vue'
import './assets/bootstrap.min.css'
import PrimeVue from 'primevue/config'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n.js'
import store from './store.js'

import interceptor from './interceptor.js'
interceptor()

import 'primeflex/primeflex.css'
import "primevue/resources/themes/saga-blue/theme.css"     
import "primevue/resources/primevue.min.css"                
import "primeicons/primeicons.css"

createApp(App)
    .use(PrimeVue)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
