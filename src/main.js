import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import { store } from './store/index.js'
import routers from './routes'

const app = createApp(App)

app.use(routers)
app.use(store)

app.mount('#app')
