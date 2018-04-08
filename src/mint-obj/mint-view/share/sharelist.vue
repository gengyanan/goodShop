<template>
<i-row>
  <h3 class="m-title"></h3>
  <div class="cate">
    <ul :style="{'width':totalWidth+'px'}">
      <li>全部</li>
      <li v-for="item in cateList">{{item.title}}</li>
    </ul>
  </div>
  <div class="imglist">
    <ul>
      <li v-for="(item,index) in imgList">
        <img :src="item.url" alt="" v-lazy="item.url">
      </li>
    </ul>
  </div>
</i-row>
</template>

<script>
    export default {
        name: "sharelist",
      data(){
          return{
            cateList:[],
            totalWidth:320,
            imgList:[],
          }
      },
      created(){
          this.getCateList();
      },
      methods:{
        getCateList(){
          let url='/getCatelist';
          this.$axios.get(url).then(rep=>{
            if(rep.data.status!==0){
             Toast({
               message: '数据出错',
               position: 'middle',
               duration: 1000
             })
              return;
            }
            console.log(rep.data.message);
            this.cateList=rep.data.message;
            const v=80;
            const count=rep.data.message.length+1;
             this.totalWidth=v*count;

          })


        }
      }


    }
</script>

<style scoped>
.m-title{
  margin-top: 50px;
  display: block;
}
  .cate{
    width: 320px;
    max-width: 320px;
    overflow-x: scroll;
  }
  .cate ul{
    margin:20px 0;
    text-align: left;
    height: 26px;
    overflow: hidden;
  }
.cate ul li{
  font-size: 14px;
  color: #02C1ED;
  display: inline-block;
  padding: 0 5px;
  width: 70px;
  text-align: center;
}
</style>
