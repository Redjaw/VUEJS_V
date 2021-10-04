import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'              
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Listbox from 'primevue/listbox'

createApp(App)
    .use(PrimeVue)
    .component('Listbox',Listbox)
    .mount('#app')
