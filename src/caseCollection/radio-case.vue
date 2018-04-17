<template>
    <i-row>
      <!--单选-->
      <ul class="list-ul">
        <li>
          <i-button type="ghost"  v-for="(item,index) in list" :class="{'primary':index===n}" @click="choose(index)">{{item}}{{index}}</i-button>
        </li>
      </ul>
    </i-row>
</template>

<script>
    export default {
      name: "radio-case",
      data(){
          return {
            n:0,
            //当前选中数据的下标
            list: '北京,上海,广州, 深圳'.split(','),

          }
      },
      methods:{
        choose(index){
          this.n=index;
        }
      }
    }
</script>

<style scoped>
  .list-ul{
    width: 400px;
    margin:30px auto;
  }
  .primary{
    background: #02C1ED;
    color: #fff;
  }
</style>
