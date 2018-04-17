<template>
  <div>
    <mt-swipe :auto="4000" :style="{'height':height}">
      <mt-swipe-item v-for="(item,index) in imgs" :style="{'height':height}">
          <img :src="item.image" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
    export default {
        name: "sliderimg",
      props:['imgs','height'],
      data(){
          return {
           ht:this.height,
          }
      },

    }
</script>

<style scoped>
  .mint-swipe, .mint-swipe-items-wrap {
    width: 100%;
    /*height: 250px;*/
  }

  .mint-swipe img {
    width: 100%;
  }
</style>
