<template>
    <div>
      <div id="postcomment">
        <h3 class="m-pl">提交评论</h3>
        <textarea placeholder="请输入您要评论的内容" v-model="postcontent"></textarea>
        <mt-button type="danger" size="large" @click="postcomment">提交</mt-button>
      </div>
      <h3 class="m-pl">评论列表</h3>
      <div v-for="(item,index) in list">
        <div>
          <span>第{{index+1}}楼</span>
          <span offset="2">{{item.user_name}}</span>
          <span >{{item.add_time}}</span>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">{{item.content}}</li>
        </ul>
      </div>

    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
        name: "common",
      props:['id'],
      data(){
        return{
          postcontent:'',
          list:[
            {
              "user_name": "匿名用户",
              "add_time": new Date(),
              "content": "张三",
            },
          ],
        }
      },
      created(){
          this.listdata();
      },
      methods:{
        postcomment(){
          if(this.postcontent.trim().length<=0){
            Toast({
              message:'评论不能为空',
            })
            return;
          }else{
            let url='/api/postcomment/'+this.id;
            this.$axios.post(url  ,{
              content:this.postcontent
            }).then(rep=>{
              // console.log(rep);
              Toast({
                message: '数据提交成功',
                position: 'middle',
                duration: 1000
              })
            })
            this.postcontent='';
          }

        },
        listdata(){
          // let url='/postcomment/'+this.id;
          // this.$axios.get(url).then(rep=>{
          //   console.log(rep);
          //
          // })
          this.list.push(this.postcontent)
        },
      }
    }
</script>

<style scoped>
.m-pl{
  margin: 30px 0;
}
</style>
