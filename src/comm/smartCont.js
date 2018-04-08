import {ImgItem, TextItem, VideoItem} from "./smartItem";

export default {
  name: 'smartCont',
  functional: true,
  props: {
    data: {
      type: Object,
    }
  },
  render(createElement, context) {
    function getComponent() {
      let data = context.props.data;
      if (data.type === 'img') return ImgItem;
      if (data.type === 'video') return VideoItem;
      return TextItem
    }

    return createElement(
      getComponent(),
      {
        props: {
          data: context.props.data
        //  把com 传递给smartCont.js的 props:data传给上面智能悬着的组件
        }
      },
       context.children  //this.$slots.default改写
    )
  },
}
