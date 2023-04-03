import { createApp } from 'vue'
import './style.css'
import router from "./router/index";
import App from './App.vue'

import saySomething from '@/store/plugins/hello'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(saySomething)
console.log(pinia)

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
 