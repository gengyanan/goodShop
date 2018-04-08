 export default {
    name: "anchor",
    props: {
      list: {
        type: Array,
        default(){
          return [];
        }
      }
    },
   data(){
     return {

     }
   },
    render(createElement){
      let len=this.list.length;
      let _this=this;
      let listNode='';
      if(len){
        return createElement('ul',this.list.map(item=>{
          return createElement('li',item);
        }))

      }else{
        listNode=createElement('p','暂无聊天内容');
      }
      return createElement('div',[
        listNode,
        createElement('input',{
          attrs:{
            placeholder:'输入内容，按回车键发送'
          },
          style:{
            width:'200px'
          },
          on:{
            keyup(event){
              if(event.keyCode!==13) return;
              _this.list.push(event.target.value);
              event.target.value='';
            }
          }
        })
      ])


    }
  }
