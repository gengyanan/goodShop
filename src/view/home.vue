<template>
  <i-row>
    <about v-show="showChilid">
      <p>分发的内容</p>
    </about>
    我是home

  </i-row>
</template>

<script>
    import About from "./about";

    export default {
      components: {About},
      name: "home",
      data(){
        return{
          showChilid:true,
        }
      }
    }
</script>

<style scoped>

</style>
