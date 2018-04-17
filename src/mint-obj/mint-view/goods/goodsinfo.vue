<template>
  <i-row class="ivu-row-main">
    <i-card class="mg-10">
      <sliderimg :imgs="goodsImg" :height="height"></sliderimg>
    </i-card>
    <h3 class="ml-10">标题</h3>
    <p class="line"></p>
    <i-card>
      <ul class="list-ul">
        <li><span class="mr-10">市场价¥{{InfoList.market_price}}</span> <span class="mr-10">销售价¥{{InfoList.sell_price}}</span></li>
        <li><span class="mr-10">购买数量</span>
          <mt-button class="mr-10">-</mt-button>
          <mt-button class="mr-10">1</mt-button>
          <mt-button class="ml-10">+</mt-button>
        </li>
        <li>
          <mt-button class="mr-10" type="primary" span="24">立即购买</mt-button>
          <mt-button type="primary" span="24">购物车</mt-button>
        </li>
      </ul>
    </i-card>
    <i-card>
          <h3>商品参数</h3>
          <p>商品货号：{{InfoList.goods_no}}</p>
          <p>存库情况：{{InfoList.stock_quantity}}</p>
          <p>上架时间：{{InfoList.add_time}}</p>
    </i-card>
    <i-card>
      <ul class="list-ul">
        <li>
          <router-link to="/goods/goodsdesc">
            <i-button type="warning" long>图文介绍</i-button>
          </router-link>

        </li>
        <li>
          <router-link to="/goods/">
            <i-button type="warning" long>商品评论</i-button>
          </router-link>

        </li>
      </ul>
    </i-card>
  </i-row>
</template>

<script>
  import Sliderimg from "../subcom/sliderimg";
  import Toast from 'mint-ui'
  import MtButton from "mint-ui/packages/button/src/button";

  export default {
    components: {
      MtButton,
      Sliderimg
    },
    name: "goodsinfo",
    data() {
      return {
        id: 0,
        goodsImg: [],
        height: 300 + 'px',
        InfoList:[],
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getGoodsImg();
      this.getinfoimg();
    },
    methods: {
      getGoodsImg() {
        let url = '/goodsinfoimg';
        this.$axios.get(url).then(rep => {
          if (rep.data.status !== 0) {
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000,
            })
            return
          }
          this.goodsImg = rep.data.message;
          console.log(this.goodsImg);
        })
      },
      getinfoimg(){
        let url='/getInfoList';
        this.$axios.get(url).then(rep=>{
          if(rep.data.status !==0){
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000,
            })
            return
          }
          this.InfoList=rep.data.message[0];
        })

      }
    }
  }
</script>

<style scoped>
  .ivu-row-main {
    top: 50px;
    margin-bottom: 80px;
  }

  .mg-10 {
    margin: 0 10px 20px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .line {
    margin-top: 10px;
    border-bottom: 1px solid #e5e5e5;
  }

  .list-ul li {
    margin-bottom: 20px;
    text-align: center;

  }

  .mint-button {
    height: 28px !important;
  }

  .mr-10 {
    margin-right: 10px;
  }
</style>
