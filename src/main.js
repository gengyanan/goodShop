// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePreview from 'vue2-preview'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/style.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import clickoutside from './comm/clickoutside'
import filter from '@/filters'
import Util from './api/util'
import '@/assets/css/mui.min.css'
import directive from '@/directive'
Vue.config.productionTip = false
Vue.prototype.$axios=Util;
Vue.use(router);
Vue.use(iView);
Vue.use(Mint);
Vue.use(VuePreview);
var bus = new Vue();
Vue.prototype.$bus = bus;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filter,
  directive,
  components: { App },
  template: '<App/>'
})
