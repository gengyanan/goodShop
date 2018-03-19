<template>
  <i-row type="flex" justify="space-between" class="code-row-bg">
    <i-col span="4">
      <i-button type="success" @click="handlecounter">{{counter}}</i-button>
    </i-col>
    <i-col span="4">
      <i-button type="warning" @click="handleIncrease">+1</i-button>
    </i-col>
    <i-col span="4" offset="1">
      <i-button type="warning" @click="handleReduces">-1</i-button>
    </i-col>
    <i-col span="24">
      <div>{{message}}</div>
      <p>{{inCont}}</p>
    </i-col>


    <!--input-->
    <input :value="value" @input="updateValue">
  </i-row>
</template>

<script>
  export default {
    name: "child-component",
    props: {
      message: {
        type: String,
        default: '你好',
      },
      initCount: {
        type: Number,
        default: 0,
      },
      value:{
        type:Number,
        default:0,
      }
    },
    // props:['initCount','message'],
    data() {
      return {
        counter: this.initCount,

      }
    },
    computed: {
      inCont() {
        return this.counter+1


      }
    },
    methods: {
      handlecounter() {
        this.counter+=1;
      },
      handleIncrease(){
        this.counter++;
        this.$emit('increase',this.counter)
      },
      updateValue(event){
        this.$emit('input',event.target.value)
      },

      handleReduces(){
        this.counter--;
        this.$emit('Mins',this.counter)
      }


  }

  }
</script>

<style scoped>

</style>
