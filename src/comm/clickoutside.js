import Vue from 'vue'

const hide=Vue.directive('clickHide',{
  bind(el,binding,vnode){
    function documentHandler(e) {
      //抛开 <button data-v-581131be="">点击显示下拉菜单</button>  的点击事件
      if(el.contains(e.target)){
        // console.log(el);
        //判断一下e.target对应的元素是否包含在el对应的元素中
        return false;
      }
      if(binding.expression){
        //
        //判断expression 中有没有执行这个handleHide这个函数，
        console.log(binding.modifiers);
        //根据判断鼠标点击的位置，来判断是否要执行handleHide这个函数
        binding.value(e)
        binding.modifiers

      }
    }
    el.__vueClickOutside__=documentHandler;
    document.addEventListener('click',documentHandler);
  }
})
export {hide}



/*
* const side=Vue.directive('clickoutside',{
    bind(el,binding,vnode){
      function documentHandler(e) {
        //el中是否包含e.target   <button data-v-581131be="">点击显示下拉菜单</button>
        if(el.contains(e.target)){
          return false;
        }
        console.log(binding);
        if(binding.expression){
          binding.value(e);
        }
      }
      // console.log(el.__vueClickOutside__);
      // el.__vueClickOutside__应该也可以换成其他的变量，在el上自定义一个属性，取名叫做__vueClickOutside__是为了语义化。
      // __vueClickOutside__ 只是一个自定义属性，__side__
      el.__vueClickOutside__=documentHandler;
      document.addEventListener('click',documentHandler)
    },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
})
export {side}
*
*
* */
