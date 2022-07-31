import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'remixicon/fonts/remixicon.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//登录拦截
router.beforeEach((to,from,next)=>{
  console.log("进行登录拦截")
  if (to.meta.requireAuth) {//requireAuth若为true则该路由需要判断是否登录
    if (localStorage.user_name) {//判断当前的userName数据是否存在
      next();
    }
    else {
      next({//返回登录页面
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})
