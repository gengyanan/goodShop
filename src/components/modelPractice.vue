<template>
    <i-row>
        <i-col >
          <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
          <p>输入的内容是：</p>
          <p style="white-space: pre">{{text}}</p>
        </i-col>
      <i-col>
        <input type="text" @input="handleInput" placeholder="输入。。。。">
        <p>输入的内容是{{message}}</p>
      </i-col>
      <i-col>
        {{selected}}
        <select name="" id="select" v-model="selected">

          <option v-for="option in options" :value="option.value">
              {{option.text}}
          </option>
        </select>
      </i-col>
      <i-col>
        <input type="radio" v-model="picked" :value="value">
        <lable>单选按钮</lable>
        <p>{{picked}}</p>
        <p>{{value}}</p>
      </i-col>
      <i-col span="10">
        <select name="" id="sel" v-model="selecteds">
            <option :value="{number:123}">123</option>
        </select>
        {{selecteds.number}}
      </i-col>
    </i-row>
</template>

<script>
    export default {
        name: "model-practice",
      data(){
          return{
            text:'sss',
            message:'',
            picked:false,
            value:123,
            selected:'html',
            selecteds:'',
            options:[
              {
                text:'HTML',
                value:'html',
              },
              {
                text:'Javascript',
                value:'js',
              },{
                text:'css',
                value:'css'
              }
            ]
          }
      },
      methods:{
        handleInput(e){
          this.message=e.target.value;
          this.message=this.message+'nihao'

        }
      }
    }
</script>

<style scoped>

</style>
