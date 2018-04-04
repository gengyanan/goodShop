import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import GoodsShop from '@/components/goodShop'
import Model from '@/components/modelPractice'
import com from '@/components/component-pra'
import comParent from '@/components/parentCom'
import SParent from '@/components/s-name'
import Left from '@/components/left-bar'
import About from '@/view/about'
import Home from '@/view/home'
import Document from '@/view/document'
import Content from '@/view/content'
import TableList from '@/view/table-list'
import Coms from '@/components/com'
import MyObj from '@/mint-obj/mint-obj'


import mHome from '@/mint-obj/mint-view/home'
import newslist from '@/mint-obj/mint-view/news/newslist'
import sharelist from '@/mint-obj/mint-view/share/sharelist'
import newsinfo from '@/mint-obj/mint-view/news/newsinfo'
import error from '@/mint-obj/mint-view/error/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/goodsShop',
      name: 'goodsShop',
      component: GoodsShop,
    },
    {
      path: '/model',
      name: 'model',
      component: Model,
    },
    {
      path: '/com',
      component: com,
      children: [
        {
          path: 'com-parent',
          name: 'comParent',
          component: comParent,
        }
      ],
    },
    {
      path: '/sparent',
      name: 'sparent',
      component: SParent,
    },
    {
      path: '/left-bar',
      name: 'Left',
      component: Left,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/document',
          name: 'Document',
          component: Document,
        },
      ]
    },
    {
      path: '/content/:id?',
      name: 'content',
      component: Content,
    },
    {
      path: '/tablelist',
      name: 'TableList',
      component: TableList,
    },
    {
      path: '/coms',
      name: 'Coms',
      component: Coms,
    }, {
      path: '/myobj',
      name: 'myobj',
      component: MyObj,
      children: [
        {
          path: '/mhome',
          name: 'mHome',
          component: mHome,
        },
        {
          path: '/news/newslist',
          name: 'newslist',
          component: newslist,
        },
        {
          path: '/share/sharelist',
          name: 'sharelist',
          component: sharelist,
        },
        {
          path: '/news/newsinfo/:id',
          name: 'newsinfo',
          component: newsinfo,
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: error,
    }, {
      path: '*',
      redirect: '/myobj',
    }


  ]
})
