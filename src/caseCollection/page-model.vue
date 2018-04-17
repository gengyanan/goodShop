<template>
  <i-row type="flex" justify="center">
    <ul class="clearfix iv-page">
      <li class="ivu-page-total">共{{total}}条/{{prepage}}页</li>
      <li class="ivu-page-disabled ivu-page-item ivu-page-item-prev">&lt;</li>
      <li class="ivu-page-item " v-for="(item,index) in pages" :class="{'ivu-page-item-active':item===value}" @click="handlePage(item)">{{item}}</li>
      <li class="ivu-page-item-next ivu-page-item">&gt;</li>
      <div class="ivu-page-options">
        <div class="ivu-page-options-elevator clearfix">
          <span class="ivu-float">前往</span>
          <p class="ivu-float">
            <i-input type="text" class="i-with-50"  v-model="pagesJump" @keyup.native.enter="handlePage(pagesJump)"></i-input>
          </p>
          <span class="ivu-float ml-20">页</span>
        </div>
      </div>
    </ul>
  </i-row>
</template>

<script>
  export default {
    name: "page-model",
    props: ['total', 'prepage','value'],
    data() {
      return {
        pages: Math.ceil(this.total / this.prepage),
        n:0,
        pagesJump:'',
      }
    },
    methods:{
      handlePage(item){
        this.$emit('input',item)
      },

    }

  }
</script>

<style scoped>
  .ml-20 {
    margin-left: 20px;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 1%;
    clear: both;
    visibility: hidden;
    zoom: 1;
  }
  .i-with-50 {
    width: 50px;
    height: 30px !important;
    vertical-align: middle;
  }
  .i-with-50 input{
    width: 50px;
    height: 30px !important;
    vertical-align: middle;
  }
  .ivu-float {
    float: left;
  }


</style>
