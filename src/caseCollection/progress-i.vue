<template>
  <div class="ivu-progress ivu-progress-active ivu-progress-show-info" ref="slider">
    <div class="ivu-progress-outer">
      <div class="ivu-progress-inner">
        <div class="ivu-progress-bg" style="height: 10px;" :style="{width}"></div>
      </div>
    </div>
    <span class="ivu-progress-text"><span class="ivu-progress-text-inner">
                {{v}}%
            </span></span></div>
</template>

<script>
  export default {
    name: "progress-i",
    props: ['max', 'min', 'value'],
    data() {
      return {
        slider:null,
        thunk:null,
        v:this.value,
      }
    },
    computed: {
      width() {
        if(this.slider){
          return this.$refs.slider.offsetWidth * this.scale + 'px'
        }
        else{
          return 0+'px'
        }

      },
      scale(){
        return  (this.value - this.min) / (this.max - this.min)
      }
    },
    mounted() {
      this.slider = this.$refs.slider;
      this.thunk=this.$refs.slider;
      let _this=this;
      this.thunk.onmousedown=function (e) {
        let width=parseFloat(_this.width);
        let disX=e.clientX;
        document.onmousemove=function (e) {
          let newWidth=e.clientX-disX+width;
          let scale=newWidth/_this.slider.offsetWidth;
          _this.v=Math.ceil((_this.max-_this.min)*scale+_this.min);
          _this.v=Math.min(_this.v,_this.max);
          _this.v=Math.max(_this.v,_this.min);
        }
        document.onmouseup=function () {
          document.onmousedown=document.onmouseup=null;
        }
      }
    }

  }
</script>

<style scoped>
  .slider .block {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #409eff;
    background: rgba(255,255,255,1);
    transition: .2s all;
  }
</style>
