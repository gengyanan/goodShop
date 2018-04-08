import {ImgItem, TextItem, VideoItem} from "./smartItem";

export default {
  name:'smartCont',
  functional:true,
  render(createElement,context){
    function getComponent() {
      let data=context.props.data;
      if(data.type==='img') return ImgItem;
      if(data.type==='video') return VideoItem;
     return TextItem
    }
    return createElement(
      getComponent(),
      {
        props:{
          data:context.props.data
        }
      },
      context.children
    )
  },
  props:{
    data:{
      type:Object,
    }
  }
}
