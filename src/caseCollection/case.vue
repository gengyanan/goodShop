<template>
  <i-row>
    <!--单选框-->
    <radio-case></radio-case>
    <!--复选框-->
    <checked-case></checked-case>
    <!--选项卡-->
    <tab-case></tab-case>
    <!--评分-->
    <start-case></start-case>
    <!--分页-->
    <i-row type="flex" justify="center">
      <ul>
        <li v-for="(item,index) in  showlist">{{item}}</li>
      </ul>
    </i-row>

    <page-model :total="list.length" :prepage="listprepage" v-model="listpage"></page-model>

    <page :total="total" :prepage="prepage" :page="page" @changePage="handleChangePage"></page>


    <!--v-model 分页-->
    <page-model :total="total" :prepage="prepage" v-model="page"></page-model>

    <!--滑块-->
    <i-row>
      <i-col span="10">
        <progress-i :max="100" :min="5" v-model="progvalue"></progress-i>
      </i-col>
    </i-row>

    <p></p>
    <div>
      <!--<Row type="flex" justify="start" class="code-row-bg">-->
      <!--<Col span="4">col-4</Col>-->
      <!--<Col span="4">col-4</Col>-->
      <!--<Col span="4">col-4</Col>-->
      <!--<Col span="4">col-4</Col>-->
      <!--</Row>-->
      <!--&lt;!&ndash;<p>子元素居中排列</p>&ndash;&gt;-->
      <!--<i-row>-->
      <!--<i-col span="12" >不知道</i-col>-->
      <!--</i-row>-->
      <!--<div class="clearfix">-->
      <!--<i-col span="12" >不知道</i-col>-->
      <!--</div>-->

      <!--&lt;!&ndash;<p>子元素居中排列</p>&ndash;&gt;-->
      <!--<ul class="flex-ul">-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--</ul>-->
      <!--<ul class="flex-ul">-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--<li class="flex-item">你好</li>-->
      <!--</ul>-->
    </div>
  </i-row>


</template>

<script>
  import CheckedCase from "./checked-case";
  import RadioCase from "./radio-case";
  import TabCase from "./tab-case";
  import StartCase from "./start-case";
  import Page from "./page";
  import PageModel from "./page-model";
  import ProgressI from "./progress-i";

  export default {
    components: {

      ProgressI,
      PageModel,
      Page,
      StartCase,
      TabCase,
      RadioCase,
      CheckedCase
    },
    name: "case",
    data() {

      return {
        //total 总数，prepage 每一页显示的条数 page 显示的页数
        total: 50,
        prepage: 10,
        page: 1,
        list: [
          '1,之前给大家介绍两种浮动闭合的办法CSS清除浮动 万能float闭合，得知很多同学都在使用下面的骨灰级解决办法：',
          '2,上诉办法是在需要清除浮动的地方加个div.clear或者br.clear，我们知道这样能解决基本清浮动问题',
          '3,但是这种方法的最大缺陷就是改变了html结构，虽然只是加个div',
          '4,用法很简单，在浮动元素的父云素上添加class=”demo clearfix”。',
          '5,你会发现这个办法也有个弊端，但的确是小问题。改变css写法就ok了',
          '6,你会发现这个办法也有个弊端，但的确是小问题。改变css写法就ok了',
          '7,这种办法是我看国外的一篇文章得到的方案，测试了，百试不爽，真的很简单，很给力。喜欢的同学也可以试试这个办法',
        ],
        listprepage: 2,
        listpage: 1,  //页数
        progvalue: 50,

      }
    },
    computed: {
      showlist() {
        let start = (this.listpage - 1) * this.listprepage;
        start = Math.max(0, start);
        let end = start + this.listprepage;
        end = Math.min(end, this.list.length);
        let news = [];
        for (let i = start; i < end; i++) {
          news.push(this.list[i])
        }
        return news;
      },
      showlist() {
        let news = [];
        let start = (this.listpage - 1) * this.listprepage;
        start = Math.max(0, start);
        let end = start + this.listprepage;
        end = Math.min(end, this.list.length);
        for (let i = start; i < end; i++) {
          news.push(this.list[i])
        }
        return news;
      }
    },
    methods: {
      handleChangePage(item) {
        this.page = item;
      }
    }
  }
</script>

<style scoped>
  .flex-ul {
    display: flex;
    justify-content: start;
  }

  .flex-item {
    flex: 1;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 1%;
    clear: both;
    visibility: hidden;
    zoom: 1;
  }
</style>
