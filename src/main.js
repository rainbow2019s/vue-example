import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import Hello from './components/Hello'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)


new Vue({
    el:'#app',
    //template:'<App/>',
    //components:{App}
    render:h=>h(App)
})

