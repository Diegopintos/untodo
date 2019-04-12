import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './rutas'
import store from './store'



require("rss-parser/dist/rss-parser.js")

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
