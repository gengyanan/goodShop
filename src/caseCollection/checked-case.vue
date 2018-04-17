<template>
  <i-row>
    <div class="list-checked clear">
      <li class="item " :class="{'checkeds':ischeckedAll}" @click="handleChecked">全选</li>
    </div>
    <ul class="list-checked clear">
      <li :class="{'checkeds':n.includes(index)}" v-for="(item,index) in list" @click="chooseChecked(index)">{{item}}</li>
    </ul>

    <ul class="list-checked clear">
      <li v-for="(cicty,index) in listData" :class="{'checkeds':cicty.checked}" @click="chooseClick(cicty)">{{cicty.name}}</li>
    </ul>
{{checkedTotal}}
  </i-row>
</template>

<script>
  export default {
    name: "checked-case",
    data(){
      return {
        list:'北京,上海,深圳,广州'.split(','),
        n:[],
        listData:[
          {
            name:'北京',
            checked:false,
          },
          {
            name:'深圳',
            checked:false,
          },
          {
            name:'上海',
            checked:false,
          },
          {
            name:'重庆',
            checked:false,
          },
        ],
        ischeckedAll:false,

      }
    },
    watch:{
      //保持数据的一致性,一对多
      ischeckedAll(){
        this.listData.forEach(city=>{
          city.checked=this.ischeckedAll;
        })
      }
    },
    computed:{
      //多对一
      checkedTotal() {
          //把选中的过滤掉，
          return this.listData.filter(city => city.checked).length
      }
    },
    methods:{
      chooseChecked(index){
        if(this.n.includes(index)){
          //FIXME 当前的index 是否存在n中，判断一下index是否存在于n中，如果存在则删除，否则添加
          this.n=this.n.filter(val=>{val !=index})
        }
        this.n.push(index)
      },
      chooseClick(cicty){

        cicty.checked =!cicty.checked;
      },
      handleChecked(){
        //控制ischeckedAll的值来更改全选按钮本身的状态
        this.ischeckedAll=!this.ischeckedAll;
      }
    }
  }
</script>

<style scoped>
  .clear:after {
    content: '';
    display: block;
    clear: both;

  }
  .list-checked {
    width: 400px;
    margin: 50px auto;
  }

  .list-checked li {
    float: left;
    position: relative;
    padding: 12px 20px 12px 30px;
    cursor: pointer;
    transition: .2s all;
  }
  .list-checked li:before {
    position: absolute;
    left: 10px;
    top: 16px;
    display: inline-block;
    border: 1px solid #333;
    width: 12px;
    height: 12px;
    content: '';
    transition: .2s all;
  }
  .list-checked .checkeds, .list-checked li:hover {
    color: #409eff;
  }

  .list-checked li.checkeds:before {
    border-color: #409eff;
    background: #409eff;
    content: '√';
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 12px;
    font-weight: bold;

  }
</style>
