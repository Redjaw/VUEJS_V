import { createApp } from 'vue'
import App from './App.vue'
import ValidatePlugin from '@/plugins/ValidatePlugin.js'
import './assets/bootstrap.min.css'


createApp(App)
    .use(ValidatePlugin)
    .mount('#app')
