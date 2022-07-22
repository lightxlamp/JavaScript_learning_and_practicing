import { createApp } from 'vue'
import App from './App'
import uiComponents from './components/UI/index'

console.log(uiComponents)

const app = createApp(App);

uiComponents.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
