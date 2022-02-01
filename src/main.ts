import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
// import ViteCody from 'vite-cody'
import App from '@/App.vue'


// Vue.use(ViteCody)

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueCompositionApi)
new Vue({
    render: (h: any) => h(App),
}).$mount('#app')