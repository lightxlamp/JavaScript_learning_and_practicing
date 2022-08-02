import { createApp } from 'vue'
import App from './App'
import uiComponents from './components/UI/index'
import router from '@/router/router'

const app = createApp(App);

uiComponents.forEach(component => {
    app.component(component.name, component)
})

app.use(router)
.mount('#app')
