<template>
   <i-row>
      <i-button type="success" @click="handlecounter">{{counter}}</i-button>
   </i-row>
</template>

<script>
    export default {
        name: "child-component",
        data(){
          return{
            counter:0,
          }
        },
        methods:{
          handlecounter(){
            this.counter++
          }
        }
    }
</script>

<style scoped>

</style>
