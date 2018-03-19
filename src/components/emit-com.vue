<template>
  <i-row type="flex" justify="start">
    <i-col span="4">
      <i-button type="error" @click="handleAdd">
        add
      </i-button>
    </i-col>

    <i-col span="4">
      <i-button type="error" @click="handleMins">
        minus
      </i-button>
    </i-col>

    <i-col span="4">
      <i-button type="error" @click="handleInput">
        inputAdd
      </i-button>
    </i-col>
    <i-col span="4">
      <i-button type="primary" @click="handleEvent">传递事件</i-button>
    </i-col>
  </i-row>
</template>

<script>
    export default {
        name: "emit-com",
        data(){
          return {
            count:0,
          }
        },
      methods:{
        handleAdd(){
         let countSum= this.count++;
          this.$emit('increase',countSum);
        },
        handleMins(){
          let countmis=this.count--;
          this.$emit('increasemis',countmis)
        },
        handleInput(){
          this.count++;
          this.$emit('input',this.count)
        },
        handleEvent(){
          this.$bus.$emit('on-message','来自组件component-a的内容')
        }
      }
    }
</script>

<style scoped>

</style>
