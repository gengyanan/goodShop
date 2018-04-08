export default {
  name:'anchorSlot',
  render(createElement){
    if(this.$slots.default===undefined){
      return createElement('div','没有使用slot时显示的文本');
    }else{
      return createElement('div',this.$slots.default);
    }
  }
}
