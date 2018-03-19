<template>
  <div>
    <!--<child-component message="来自父组件的数据" :init-count="0"></child-component>-->
    <child-component @increase="handleGetTotal"></child-component>
    <child-component @Mins="handleGetMins"></child-component>
    {{total}}

    <child-component v-model="totals"></child-component>
    <parent-com></parent-com>
  </div>

</template>

<script>
    import ChildComponent from "./child-component";
    import ParentCom from "./parentCom";

    export default {
      components: {
        ParentCom,
        ChildComponent},
      name: "component-pra",
      data(){
        return{
          total:0,
          totals:0,
        }
      },
      methods:{
        handleGetTotal(total){
          this.total=total;
        },
        handleGetMins(total){
          this.total=total;
        }
      }

    }
</script>

<style scoped>

</style>
