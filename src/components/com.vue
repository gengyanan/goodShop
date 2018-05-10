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


    <i-card span="10">
      <anchor :list="list"></anchor>

    </i-card>
    <i-button type="primary" @click="handleClick">显示列表</i-button>

    <i-card span="4">
      <anchor-slot>
        <p>slot内容</p>
      </anchor-slot>
    </i-card>
    <i-card>
      <smart-cont :data="data"></smart-cont>
      <i-button @click="change('img')">切换为图片组件</i-button>
      <i-button @click="change('video')">切换为视频组件</i-button>
      <i-button @click="change('text')">切换为文本组件</i-button>
    </i-card>
  </i-row>


</template>

<script>
  import InputNumber from "./inptnumber";
  import {timer} from "../directive/index";
  import {hide} from "../comm/clickoutside";
  import Anchor from "../comm/anchor1";
import AnchorSlot from '../comm/anchorSlot'
  import SmartCont from '../comm/smartCont'
  export default {
    components: {
      SmartCont,
      AnchorSlot,
      Anchor,
      InputNumber
    },
    name: "com",
    data() {
      return {
        value: 5,
        show: false,
        timeNow: new Date().getTime(),
        bligTitle: '你好',
        list: [],
        data:{},
      }
    },
    methods: {
      handleHide() {
        this.show = !this.show;
      },
      handleClick() {
        this.list = [
          '《Vue.js实战》',
          '《Javascript高级程序设计》',
          '《Javascript语言精粹》',
        ]
      },
      created(){
        this.change('img');

      },
      change(type){
        if(type==='img'){

          this.data={
            type:'img',
            url:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%B5%B5%E4%B8%BD%E9%A2%96&step_word=&hs=0&pn=34&spn=0&di=37943988940&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2253646777%2C2987789342&os=2165246624%2C2279374941&simid=3466937226%2C307773995&adpicid=0&lpn=0&ln=3938&fr=&fmq=1523169060919_R&fm=&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201508%2F16%2F20150816012042_aPeVQ.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3F9dlb089nnAzdH3F1jpwtsAzdH3F&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
          }
        }else if(type==='video'){
          this.data={
            type:'video',
            url:'http://music.baidu.com/tag/%E6%83%85%E6%AD%8C'
          }
        }
        else if(type==='text'){
          this.data={
            type:'text',
            content:'这是一段文本'
          }
        }
      }

    }
  }
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }

  .main {
    width: 125px;
  }

  button {
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

  button:active {
    top: 1px;
    left: 1px;
  }

  .dropdown {
    width: 100%;
    height: 150px;
    margin: 5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  }

  .dropdown p {
    display: inline-block;
    padding: 6px;
  }
</style>
