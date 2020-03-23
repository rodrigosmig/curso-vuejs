import Vue from 'vue'
import './plugins/vuetify'
import App from '@/App.vue'
import Menu from '@/components/template/Menu.vue'
import Itens from '@/components/template/Itens.vue'
import Content from '@/components/widgets/Content.vue'
import Footer from '@/components/template/Footer.vue'

Vue.config.productionTip = false
Vue.component('app-menu', Menu)
Vue.component('app-itens', Itens)
Vue.component('app-content', Content)
Vue.component('app-footer', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
