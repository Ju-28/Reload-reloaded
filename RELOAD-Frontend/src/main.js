import './assets/styles/stylesheet.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // import store from './store'
// import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000'

// const PIXI = require('pixi.js');

// createApp(App).use(store).use(router, axios).mount('#app')

