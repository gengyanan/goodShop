<template>
  <i-row type="flex" justify="center">
    <i-col span="3">
      <i-input v-model="id"></i-input>
    </i-col>
    <i-col span="3" offset="1">
      <i-input v-model="pname" v-focus v-color="color1"></i-input>
    </i-col>
    <i-col span="3">
      <i-button @click="handleadd()">添加</i-button>
    </i-col>
    <i-col type="flex" justify="center" span="16" class="mt-30">
      <table style="width: 100%;border-bottom:none">
        <thead class="ivu-table">
        <tr>
          <td>编号</td>
          <td>名称</td>
          <td>创建时间</td>
          <td>操作</td>
        </tr>
        GengYaNan?!151
        </thead>
        <tbody class="ivu-table ivu-table-body">

        <tr v-show="list.length<=0">
          <td colspan="4">暂无数据</td>
        </tr>
        <tr v-for="(item,index) in list">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ctime}}</td>
          <td>
            <i-button @click="del(item.id)">删除</i-button>
          </td>
        </tr>
        </tbody>
      </table>
    </i-col>
    <i-col type="flex" justify="center" span="16" class="mt-30">
    </i-col>
    <i-col>
      <i-button @click="add(1,5)">add</i-button>
    </i-col>
    <i-col>
      <div v-test:msg.a.b="message"></div>
    </i-col>
    <i-col>
        <div class="main" v-clickoutside="handleClose"></div>
        <button @click="show!=show"></button>
    </i-col>
  </i-row>
</template>

<script>
  import ICol from "iview/src/components/grid/col";
  // import calc from '../comm/filters'
  import {add, substrict} from "../comm/filters";

  export default {
    components: {ICol},
    name: "table-list",
    data() {
      return {
        list: [
          {id: 0, name: '奔驰', ctime: new Date}
        ],
        id: '',
        pname: '',
        time: new Date(),
        color1: 'red',
        message: 'some text',
        show:false,

      }
    },
    directives: {
      focus: {
        update(el) {
          el.focus();
        }
      },
      color: {
        update(el, binding) {
          console.log(binding.value);
          console.log(el);
          el.style.background = binding.value;
        },
        bind(el, binding, vnode) {
          let keys = [];
          for (let i in vnode) {
            keys.push(i);
          }
          el.innerHTML=`
            name+${binging.name}+'value'+${binding.value}+'expression'+${binding.expression}+'argument'+${binding.arg}+
            ${JSON.stringify(binding.modifiers)}+'vnode keys'+${keys.join(',')}
          `;
        },

      }
    },
    methods: {
      handleadd() {
        let data = {id: this.id, name: this.pname, ctime: new Date};
        this.list.push(data);
        this.id = '';
        this.pname = '';

      },
      del(id) {
        let indexs = this.list.findIndex(item => {
          return item.id == id
        })
        this.list.splice(indexs, 1);
      },
      // add:calc.add
      //  按需导出
      add,
      substrict,

    }
  }
</script>

<style scoped>
  .mt-30 {
    margin-top: 30px;
  }

  .ivu-table tr {
    height: 48px;
    background: azure;
  }

  .ivu-table td {
    text-align: center;
    background: azure;
  }

  .ivu-table-body tr {
    background: #fff;
  }

  .ivu-table-body td {
    background: transparent;
  }
</style>
