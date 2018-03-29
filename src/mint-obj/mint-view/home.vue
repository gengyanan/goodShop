<template>
  <i-row class="ivu-row-main">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in list">
        <img :src="item.image" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div id="Gallery" class="mui-slider" style="margin-top:15px;">
      <div class="mui-slider-group">
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/news/newslist">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/share/sharelist">
                <span class="mui-icon mui-icon-email"></span>
                <div class="mui-media-body">图片分享</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/goods/goodslist">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/feedback">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">留言反馈</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/vide">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">视频专区</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/call">
                <span class="mui-icon  mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </i-row>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    name: "myhome",
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getImgs();
    },
    methods: {
      getImgs() {
        const url = '/list';
        this.$axios.get(url).then(response => {
          let data = response.data;
          if (data.status != 0) {
            Tost({
              message: '数据出错',
              position: 'middle',
              duration: 1000
            })
            this.$router.replace('/error');
            return;
          }
          this.list = data.data;

        })
      }
    }


  }
</script>

<style scoped>
  .mint-swipe, .mint-swipe-items-wrap {
    width: 100%;
    height: 150px;
  }

  .mint-swipe img {
    width: 100%;
  }

  .ivu-row-main {
    top: 50px;
  }

  .mui-grid-view {
    background: #fff;
    border: none;
  }

  .mui-table-view-cell {
    border-right: none !important;
    border-bottom: none !important;
  }
</style>
