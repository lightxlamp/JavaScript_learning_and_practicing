import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import lineChart from './components/lineChart.vue'
import pieChart from './components/pieChart.vue'

Vue.config.productionTip = false

Vue.component('line-chart', lineChart);
Vue.component('pie-chart', pieChart);

new Vue({
  router,
  store,
  vuetify,
  components: {
 
  },
  render: h => h(App)
}).$mount('#app')