import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import RandomChartComponent from './components/RandomChartComponent.vue'
import chart from './components/chart.vue'
import VueChartJs from '../node_modules/vue-chartjs'

Vue.config.productionTip = false

Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      datasets: [
        {
          label: 'Коммиты на GitHub',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})

new Vue({
  router,
  store,
  vuetify,
  components : {
    // 'random-chart-component': RandomChartComponent
    'chart': chart
  },
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   vuetify: new Vuetify({
//     theme: { dark: true },
//   }),
//   data: () => ({
//     drawer: null,
//   })
// })