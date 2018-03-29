<template>
  <div class="mt-40">
    <mt-spinner type="fading-circle" color="#26a2ff" :size="60" v-if="messageData.length<=0" class="m-pos"></mt-spinner>
    <ul class="mui-table-view m-bt-50">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in messageData">
        <router-link :to="'/news/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.image">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>{{item.cparagraph}}</p>
            <p class="m-flex">
              <span class="mui-ellipsis" v-timer="timeNow"></span>
              <span class="mui-ellipsis">点赞人数：{{item.integer}}</span>
            </p>
            <!--<p>{{timeYear|datafmta('YYYY-MM-DD')}}</p>-->
          </div>
        </router-link>
      </li>
    </ul>

  </div>

</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    name: "newslist",
    data() {
      return {
        messageData: [],
        timeNow: (new Date()).getTime(),
        // timeYear:(new Date('2017-01-01')).getTime()
      }
    },
    created() {
      this.messageList();
    },
    methods: {
      messageList() {
        const url = '/message';
        this.$axios.get(url).then(rep => {
          console.log(rep.data);
          let dataList = rep.data;
          if (dataList.status != 0) {
            Toast({
              message: '数据出错',
              position: 'middle',
              duration: 1000
            })
            //请求失败后跳出页面
            this.$router.replace('/error');
            return;
          }
          this.messageData = dataList.message;
        })
      }
    }
  }
</script>

<style scoped>
  .m-flex {
    display: flex;
    justify-content: center;
  }

  .m-flex span {
    flex: 1;

  }

  .m-bt-50 {
    margin-bottom: 70px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .m-pos {
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -30px;
  }
</style>
