<template>
  <div>
    <h3 class="m-title"></h3>
    <div class="cate">
      <ul :style="{'width':totalWidth+'px'}">
        <li>全部</li>
        <li v-for="item in cateList" @click="getImgList(item.id)">{{item.title}}</li>
      </ul>
    </div>
    <div class="imglist">
      <ul>
          <router-link tag="li" v-for="(item,index) in imgList" class="list-li" to="/share/shareinfo">
            <img v-lazy="item.img_url">
            <div id="desc">
              <h5 v-text="item.title" class="img-title"></h5>
              <p v-text="item.zhaiyao" class="img-text"></p>
            </div>
          </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Lazyload} from 'mint-ui';

  export default {
    name: "sharelist",
    data() {
      return {
        cateList: [],
        totalWidth: 320,
        imgList: [],
      }
    },
    created() {
      this.getCateList();
      let all = 0
      this.getImgList(all);
    },
    methods: {
      getCateList() {
        let url = '/getCatelist';
        this.$axios.get(url).then(rep => {
          if (rep.data.status !== 0) {
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000
            })
            return;
          }
          this.cateList = rep.data.message;
          const v = 80;
          const count = rep.data.message.length + 1;
          this.totalWidth = v * count;
        })
      },
      getImgList(cateid) {
        cateid = cateid || 0;
        let url = '/imglist/' + cateid;
        this.$axios.get(url).then(rep => {
          if (rep.data.status !== 0) {
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000
            })
            return;
          }
          this.imgList = rep.data.data;
        })
      },
    }


  }
</script>

<style scoped>
  .m-title {
    margin-top: 50px;
    display: block;
  }

  .cate {
    width: 320px;
    max-width: 320px;
    overflow-x: scroll;
  }

  .cate ul {
    margin: 20px 0;
    text-align: left;
    height: 26px;
    overflow: hidden;
  }

  .cate ul li {
    font-size: 14px;
    color: #02C1ED;
    display: inline-block;
    padding: 0 5px;
    width: 70px;
    text-align: center;
  }

  .list-li {
    position: relative;
  }

  .img-title {
    font-weight: 700;
    font-size: 12px;
    color: #80ceef;
  }

  .img-text {
    font-size: 12px;
    color: #ffd181;

  }

  #desc {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, .5);

  }

  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  .imglist img {
    width: 100%;
    height: 100%;
  }
</style>
