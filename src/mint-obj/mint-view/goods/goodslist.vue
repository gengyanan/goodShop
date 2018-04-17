<template>
  <i-row class="mt-70">
    <ul class="mui-table-view mui-grid-view mb-40">
      <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in list" >
        <!--item.id-->
        <router-link :to="{path:'/goods/goodsinfo'}">
          <img class="mui-media-object"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523287368217&di=31cdd4e3556f81f54b433871fdb87568&imgtype=0&src=http%3A%2F%2Fimage.coolapk.com%2Fdiscovery%2F2015%2F1218%2F387510_1450440477_7341.png">
          <div class="mui-media-body m-ht">
            <p><span class="now-use">¥{{item.sell_price}}</span><span class="abandoned">{{item.market_price}}</span></p>
            <p><span class="col-95">热卖中</span><span class="col-95">剩余{{item.stock_quantity}}件</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </i-row>
</template>

<script>
  import Toast from 'mint-ui'
  export default {
    name: "goodslist",
    data(){
      return {
        list:[]
      }
    },
    created(){
      this.getgoodslist();
    },
    methods:{
      getgoodslist(){
        let url='/getGoodslist';
        this.$axios.get(url).then(rep=>{
          if(rep.data.status!==0){
            Toast({
              message:'数据出错',
              position:'middle',
              duration:1000,

            })
            return
          }
          console.log(rep.data.message);
          this.list=rep.data.message;
        })
      }
    }

  }
</script>

<style scoped>
  .mt-70 {
    margin-top: 70px;
  }
  .m-ht{
    height: 60px!important;
    line-height:30px!important;
  }
  .col-95{
    color: #959595;
  }
  .now-use{
    color: red;
    margin-right: 20px;
  }
  .abandoned{
    color: #6d6d72;
    text-decoration: line-through;
  }
  .mb-40{
    margin-bottom: 60px;
  }
</style>
