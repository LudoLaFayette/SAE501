// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { plugin as formkitPlugin } from '@formkit/vue';
import App from './App.vue'
import router from './router'
import '@/scss/main.scss'

const app = createApp(App)
// createApp(App).use(plugin, defaultConfig).mount('#app')
app.use(formkitPlugin, {
    // Vos configurations globales de FormKit viennent ici
  });
  

app.use(createPinia())
app.use(router)

app.mount('#app')
