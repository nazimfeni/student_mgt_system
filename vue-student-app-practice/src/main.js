import { createApp } from 'vue' //import createApp() function
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
