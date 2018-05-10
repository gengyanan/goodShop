<template>
  <div>
    <i-col span="2" offset="1">
      <button @click="handleDown" type="error">-</button>
    </i-col>
    <i-col span="4" offset="2">
      <input type="text" :value="currentValue" @change="handleChange" class="i-ht-25">
    </i-col>
    <i-col span="2" offset="1">
      <button @click="handleUp" type="success">+</button>
    </i-col>
  </div>
</template>

<script>
  import Button from "iview/src/components/button/button";
  import {isValueNumber} from "../comm/input-number";

  export default {
    components: {Button},
    name: "inptnumber",
    props: {
      max: {
        type: Number,
        default: Infinity,
      },
      min: {
        type: Number,
        default: Infinity,
      },
      value: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        currentValue: this.value,
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('on-change', val);
      },
      value(val) {
        this.updateValue(val);
      }
    },
    mounted() {
      this.updateValue(this.value)
    },
    methods: {
      handleDown() {
        if (this.currentValue <= this.max) {
          this.currentValue -= 1;
        }
        else {
          return;
        }
      },
      handleUp() {
        if (this.currentValue >= this.min) {
          this.currentValue += 1;
        } else {
          return;
        }
      },
      updateValue(val) {
        if (val > this.max) {
          val = this.max;
        }
        if (val < this.min) {
          val = this.min;
        }
        this.currentValue = val;
      },
      handleChange(event) {
        let val = event.target.value.trim();
        let max = this.max;
        let min = this.min;
        if (isValueNumber(val)) {
          let val = Number(val);
          this.currentValue = val;
          if (val > max) {
            this.currentValue = max;
          }
          if (val < min) {
            this.currentValue = min;
          }
        } else {
          event.target.value = this.currentValue;
        }
      },


    }
  }
</script>

<style scoped>
.i-ht-25{
  height: 33px;
  padding: 5px;
  text-align: center;
}
</style>
