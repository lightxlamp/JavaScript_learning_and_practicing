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
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "EU Tech",
          data: [9, 58, 5, 10, 5, 1, 9, 3, 2, 25, 1, 1],
          backgroundColor: "#512DA8",
          hoverBackgroundColor: "#512DA8",
          hoverBorderWidth: 0
        },
        {
          label: "Japan Value",
          data: [15, 52, 12, 5, 4, 0, 4, 2, 1, 22, 3, 2],
          backgroundColor: "#FFA000",
          hoverBackgroundColor: "#FFA000",
          hoverBorderWidth: 0
        },
        {
          label: "Utilities",
          data: [17, 11, 22, 18, 12, 22, 22, 19, 24, 9, 8, 1],
          backgroundColor: "#D32F2F",
          hoverBackgroundColor: "#D32F2F",
          hoverBorderWidth: 0
        },
        {
          label: "US Momentum",
          data: [18, 13, 25, 10, 13, 25, 25, 21, 20, 1, 1, 9],
          backgroundColor: "#4D96BE",
          hoverBackgroundColor: "#4D96BE",
          hoverBorderWidth: 0
        },    
        {
          label: "Others",
          data: [20, 15, 7, 7, 1, 29, 24, 22, 1, 9, 9, 0],
          backgroundColor: "#F47A7A",
          hoverBackgroundColor: "#F47A7A",
          hoverBorderWidth: 0
        }
      ],
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