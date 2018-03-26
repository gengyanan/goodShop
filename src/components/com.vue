<template>
  <i-row>
    <input-number v-model="value" :max="10" :min="0" v-focus></input-number>
    <div class="main" v-clickHide.esc="handleHide">
      <button @click="handleHide">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <p>下拉框的内容，点击外面区域可以关闭</p>
      </div>
    </div>
    <div v-timer="timeNow"></div>
  </i-row>


</template>

<script>
  import InputNumber from "./input-number";
  import {timer} from "../directive/directive";

  export default {
    components: {InputNumber},
    name: "com",
    data() {
      return {
        value: 5,
        show:false,
        timeNow:new Date().getTime(),

      }
    },
    methods:{
      handleHide(){
        this.show=!this.show;
      }

    }
  }
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
  .main{
    width: 125px;
  }
  button{
    display: block;
    width: 100%;
    color: #fff;
    background-color: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;
  }
  button:active{
    top: 1px;
    left: 1px;
  }
  .dropdown{
    width: 100%;
    height: 150px;
    margin: 5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .dropdown p{
    display: inline-block;
    padding: 6px;
  }
</style>
