<template>
  <div class="desc">
    <div class="title">
      <h4>{{photoinfo.title}}</h4>
      <p class="text">
        {{photoinfo.add_time}} {{photoinfo.click}}次浏览
      </p>
      <p class="line"></p>
    </div>
    <div class="mui-slider-group">
      <div class="mui-slider-item">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in list">
            <a href="javascript:;">
              <img class="preview-img"  :src="item.src" height="100" @click="$preview.open(index, list)">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="mt-10">{{photoinfo.content}}</p>
    <comment :id="id"></comment>

  </div>
</template>

<script>
  import Comment from '../subcom/common'
  import Toast from 'mint-ui'
  export default {
    components: {Comment},
    name: "shareinfo",

    data(){
      return {
        id:0,
        photoinfo:[],
        list: []

      }
    },
    created(){
      this.id=this.$route.params.id;
      this.photoinfos();
      this.getImageinfo();
    },
    methods:{
      photoinfos(){
        let url='/shareImginfo/'+this.id;
        this.$axios.get(url).then(rep=>{
          if(rep.data.status!==0){
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000
            })
            return;
          }
          this.photoinfo=rep.data.message[0];
        })
      },
      getImageinfo(){
        let url='/getImageinfo/';
        this.$axios.get(url).then(rep=>{
          if(rep.data.status!==0){
            Toast({
              message:'数据出错',
              position:'middle',
              duration:1000,

            })
            return ;
          }
          let message=rep.data.message;
          let img =document.createElement('img');
          message.forEach(item=>{
            img.src=item.src;
            item.w=img.width;
            item.h=img.height;
          })
          this.list=message;
        })
      }



    }
  }
</script>

<style scoped>
  .desc {
    margin: 70px 0 0;
  }
  .title h4 {
    color: #02C1ED;
    margin-left: 30px;
  }

  .title .text {
    color: rgba(0, 0, 0, .4);
    margin-top: 10px;
    margin-left: 30px;
  }

  .line {
    width: 100%;
    border-top: 1px solid #e6e6e6;
  }
  .mt-10{
    margin-top: 20px;
  }
</style>
