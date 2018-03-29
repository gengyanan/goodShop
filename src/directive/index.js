import Vue from 'vue'
import {time} from '../comm/timer'
const focus=Vue.directive('focus',{
    inserted(el,binding){
      el.focus();
      console.log(binding.name);
      el.setAttribute('placeholder','test')
    }
})

const timer=Vue.directive('timer',{
  bind(el,binding,vnode){
    el.innerHTML=time.getFormatTime(binding.value);
    el.__timeout__=setInterval(function () {
      el.innerHTML=time.getFormatTime(binding.value)
    },600000);
  },
  unbind(el){
    clearInterval(el.__timeout__);
    delete el.__timeout__;
  }
})
export {focus,timer}
