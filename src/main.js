import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'    //core css
import 'primeicons/primeicons.css'  

createApp(App)
    .use(PrimeVue)
    .mount('#app')
