<template>
<i-row class="ivu-row-main">
    <h3 v-text="info.title"></h3>
    <p class="line"></p>
    <p v-html="info.content"></p>
</i-row>
</template>

<script>
  import Toast from 'mint-ui'
    export default {
        name: "goodsdesc",
        data(){
          return {
            id:0,
            info:[
              {
                "title":"华为荣耀6plus16G",
                "content":"",

              }
            ],
          }
        },
      created(){
          this.id=this.$route.params.id;
          this.getinfo();
      },
      methods:{
          getinfo(){
            let url='/getdesc';
            this.$axios.get(url).then(rep=>{
              if(rep.data.status!==0){
                Toast({
                  message:'数据出错',
                  position:middle,
                  duration:true,
                })
                return;
              }
              this.info=rep.data.message[0];
            })
          }


      }

    }
</script>

<style scoped>
  .ivu-row-main {
    top: 50px;
    margin-bottom: 80px;
    padding: 0 15px;
  }
  .line {
    margin-top: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
</style>
