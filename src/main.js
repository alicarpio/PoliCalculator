import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-cyan/theme.css'
import InputText from 'primevue/inputtext';

import {createPinia} from 'pinia'

import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(PrimeVue);
app.component('InputText', InputText)
app.mount('#app')