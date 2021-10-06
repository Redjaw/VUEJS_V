import { createApp } from 'vue'
import App from '@/App.vue'
import store from './App.store.js'
import PrimeVue from 'primevue/config'

import "primevue/resources/themes/mdc-dark-indigo/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css'

createApp(App)
	.use(store)
	.use(PrimeVue)
	.mount('#app')
