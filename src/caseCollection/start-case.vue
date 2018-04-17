<template>
  <div class="box">
    <ul class="rate clear">
      <li class="item " v-for="(item,index) in num" :class="{'checked':item<=n} " @mouseover='over(item)'
      @mouseout="out" @click="handleclick(item)">
        <i class="fas fa-star" :class="item<=n?'fas':'far'"></i>
      </li>
      <li class="text">{{showText[n]}}</li>
    </ul>
    <i-input type="text" v-model="message" placeholder="输入。。" ref="input1"></i-input>
    <p>您输入的内容是：{{message}}</p>
    <i-button @click="add">添加</i-button>
  </div>
</template>
<script>
  export default {
    name: "start-case",
    data() {
      return {
        num: 5,
        n: 3,//记录高亮星星的最大值
        m:0,//记录当前的分数
        showText:'很差,较差,一般,很好,非常好,完美'.split(','),
        message:'',
      }
    },
    methods:{
      over(item){
        this.n=item;
      },
      out(){
        this.n=this.m;
      },
      handleclick(item){
        this.m=item
      },
      add(){
        //获取这个dom节点，然后在获取input1的值
        console.log(this.$refs.input1.value);
      }
    }

  }
</script>
<style scoped>
  .box {
    margin: 10px auto;
    width: 400px;
  }

  .clear:after {
    content: '';
    display: block;
    clear: both;
  }

  .rate {
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style: none;
  }

  .rate .item {
    float: left;
    padding: 0 5px;
    font-size: 30px;
    cursor: pointer;
    transition: .2s all;
    color: #ccc;
  }

  .rate .item.checked {
    color: rgb(247, 186, 42);
  }

  .rate .item:hover {
    transform: scale(1.3);
  }

  .rate .text {
    float: left;
    padding-left: 15px;
    font-size: 30px;
  }

</style>
