<template>
    <i-row>
      <mt-header title="标题" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!--<p class="m-title">欢迎来到这里</p>-->
      <router-view></router-view>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item mui-active" to="/mhome">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" to="/tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </router-link>
        <router-link class="mui-tab-item" to="/tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </router-link>
      </nav>
    </i-row>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "myobj",
      methods:{
          tip(){
            Toast('nihao');
          }
      }
    }
</script>

<style scoped>
.m-title{
  font-size: 30px;
  color: #009A61;
  margin-top: 80%;
}
</style>
