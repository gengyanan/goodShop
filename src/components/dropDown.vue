<template>
  <div>
  <label>测试多选渲染：</label>
  <div>
    <template v-for="item in chks">
      <input type="checkbox" name="hobby" :value="item.id"
             :checked="loopsss.indexOf(item.id) > -1"/>{{item.name}}
    </template>
  </div>
  <label>下拉列表测试：</label>
  <div>
    <select multiple style="width: 200px;">
      <template v-for="item in chks">
        <option type="checkbox" name="hobby" :value="item.id"
                :selected="loopsss.indexOf(item.id) > -1">{{item.name}}
        </option>
      </template>
    </select>
  </div>
  </div>

</template>


<script>
  export default {
    name: "drop-downs",
    data () {
      return {
        chks: [
          {id:1,name:"吃饭"},
          {id:2,name:"睡觉"},
          {id:3,name:"打豆豆"},
          {id:4,name:"唱歌"},
          {id:5,name:"学习"}
        ],
        loopsss:''
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        var arr = [1,2,4]//假设这是被选中的爱好
        this.loopsss = arr
      }
    }
  }

</script>
