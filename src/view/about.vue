<template>
  <i-row>
    about
    <slot>
      <p>如果夫组件没有插入内容，我将作为默认出现</p>
    </slot>
    <mt-button type="danger" @click="tip">danger</mt-button>
  </i-row>
</template>

<script>
    import MtButton from "mint-ui/packages/button/src/button";
    import {Toast} from 'mint-ui';
    export default {
      components: {MtButton},
      name: "about",
      methods:{
        tip(){
          Toast('你好')
        }
      }
    }
</script>

<style scoped>

</style>
