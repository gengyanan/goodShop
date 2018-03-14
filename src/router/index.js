import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import GoodsShop from '@/components/goodShop'
import Model from '@/components/modelPractice'
import com from '@/components/component-pra'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/goodsShop',
      name:'goodsShop',
      component:GoodsShop,
    },
    {
      path:'/model',
      name:'model',
      component:Model,
    },
    {
      path:'/com',
      name:'com',
      component:com,
    }

  ]
})
