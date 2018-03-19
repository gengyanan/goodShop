<template>
  <i-row>
    <i-col span="10">
      {{total}}
    </i-col>
    {{message}}
    <emit-com @increase="handleIncrease" @increasemis="handleIncrease" v-model="total"></emit-com>
  </i-row>
</template>

<script>

  import EmitCom from "./emit-com";


  export default {

    components: {EmitCom},
    name: "parent-com",
    data() {
      return {
        total: 0,
        message: ''
      }
    },
    mounted() {
      this.$bus.$on('on-message', (msg) => {
        this.message = msg;
      })
    },
    methods: {
      handleIncrease(value) {
        this.total = value
      },


    }
  }
</script>

<style scoped>

</style>
