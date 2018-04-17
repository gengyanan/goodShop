<template>
  <div class="box">
    <div class="tab">
      <ul class="clear">
        <li :class="{'active':index==n}" v-for="(item,index) in list" @click="handleClick(index)">{{item.name}}</li>
      </ul>
      <div class="content">
        <p>{{list[n].content}}</p>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: "tab-case",
    data(){
      return {
        n:0,
        list:[
          {
            name:'北京',
            content:'这是北京',
          },
          {
            name:'上海',
            content:'这是上海',
          },
          {
            name:'山东',
            content:'这是山东',
          },
          {
            name:'成都',
            content:'这是成都',
          },
        ]
      }
    },
    methods:{
      handleClick(index){
       this.n=index;
      }
    }
  }
</script>

<style scoped>
  .box {
    margin: 0 auto;
    width: 400px;
  }
  .clear:after {
    content:'';
    display: block;
    clear:both;
  }
  .tab {
    width: 400px;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    position: relative;
  }
  li {
    float: left;
    padding: 0 20px;
    margin: 0 0 -1px -1px;
    position: relative;
    height: 40px;
    border: 1px solid transparent;
    line-height: 40px;
    cursor: pointer;
    transition: .2s all;
  }
  li:hover {
    color: rgb(64, 158, 255);
  }
  li.active {
    background: #fff;
    border-right-color: #dcdfe6;
    border-left-color: #dcdfe6;
    color: rgb(64, 158, 255);
  }
  .tab .content {
    padding: 10px;
  }

</style>
