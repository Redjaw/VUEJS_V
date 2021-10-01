import { createApp } from 'vue'
import App from '@/App.vue'
import store from './App.store.js'

import '@/assets/bootstrap.min.css'

createApp(App)
	.use(store)
	.mount('#app')
