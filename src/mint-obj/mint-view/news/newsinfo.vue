<template>
  <section class="mt-50">
    <h3 class="m-title tf">{{info.title}}</h3>
    <p class="m-navtitle tf"><span class="col-009a61 m-name tf">name</span><span class="m-timer tf">{{info.timer}}</span></p>
    <div class="container fmt">
      <h2 >{{info.title}}</h2>
      <p class="tf">{{info.cparagraph}}</p>
    </div>
   <common :id="id"></common>
  </section>
</template>

<script>
  import {Toast} from 'mint-ui'
  import Common from "../subcom/common";
  export default {
    components: {Common},
    name: "newsinfo",
    data(){
      return {
        id:0,
        info:[],
      }
    },
    created(){
      this.id=this.$route.params.id;
      this.getInfo();
    },
    methods:{
      getInfo(){
        let url='/newsinfo/'+this.id;
        this.$axios.get(url).then(rep=> {
            const dataInfo=rep.data;
            if(dataInfo.status!=0){
              Toast({
                message: '数据出错',
                position: 'middle',
                duration: 1000
              })
              this.$router.replace('/error');
              return;
            }
            this.info=dataInfo.data[0];
        })
      }
    }
  }
</script>

<style scoped>
  .mt-50 {
    margin-top: 50px;
  }

  .m-title {
    margin: 72px 20px 20px;

  }

  .m-navtitle {
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }

  .tf {
    text-align: left;
  }

  .m-name {
    margin: 0 20px;

  }

  .col-009a61 {
    color: #009a61;
  }

  .fmt h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
  }
  .fmt p{
    margin:20px 20px 0;
  }
</style>
