<template>
    <i-row>
      <input type="text" :value="currentValue" @change="handleChange">
      <button @click="handleDown" type="error" offset="2">-</button>
      <button @click="handleUp" type="success">+</button>
    </i-row>
</template>

<script>
    import Button from "iview/src/components/button/button";
    import {isValueNumber} from "../comm/input-number";

    export default {
      components: {Button},
      name: "input--number",
      props:{
        max:{
          type:Number,
          default:Infinity,
        },
        min:{
          type:Number,
          default:Infinity,
        },
        value:{
          type:Number,
          default:0,
        }
      },
      data(){
        return{
          currentValue:this.value,
        }
      },
      watch:{
        currentValue(val){
          this.$emit('input',val);
          this.$emit('on-change',val);
        },
        value(val){
          this.updateValue(val);
        }
      },
      mounted(){
        this.updateValue(this.value)
      },
      methods:{
        handleDown(){
          if(this.currentValue<=this.max){
            this.currentValue-=1;
          }
          else{
            return;
          }
        },
        handleUp(){
          if(this.currentValue>=this.min){
            this.currentValue+=1;
          }else{
            return;
          }
        },
        updateValue(val){
          if(val>this.max){
            val=this.max;
          }
          if(val<this.min){
            val=this.min;
          }
          this.currentValue=val;
        },
        handleChange(event){
          let val=event.target.value.trim();
          let max=this.max;
          let min=this.min;
          if(isValueNumber(val)){
            let val=Number(val);
            this.currentValue=val;
            if(val>max){
              this.currentValue=max;
            }
            if(val<min){
              this.currentValue=min;
            }
          }else{
            event.target.value=this.currentValue;
          }
        },


      }
    }
</script>

<style scoped>

</style>
