<template>
  <i-row>
    <h3>我是value</h3>
    <input type="text" v-model="value1">
    {{value1}}
  </i-row>
</template>

<script>
  export default {
    name: "document",
    data(){
      return{
        value1:'',
      }
    },

  }
</script>

<style scoped>

</style>
