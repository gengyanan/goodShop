<template>
  <i-row>
   <g-tables :data="data" :columns="columns"></g-tables>
    <i-button @click="handleAddData">添加数据</i-button>
  </i-row>
</template>

<script>

  import GTables from "../comm/g-tables";

  export default {
    components: {GTables},
    name: "gtable",

    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true,
          },
          {
            title: '出生日期',
            key: 'birthday',
          },
          {
            title: '地址',
            key: 'address',
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1992-01-02',
            address: '北京朝阳区',
          },
          {
            name: '张小刚',
            age: 18,
            birthday: '1992-01-11',
            address: '北京朝阳区',
          },
          {
            name: '李晓红',
            age: 12,
            birthday: '1992-01-03',
            address: '北京朝阳区',
          }, {
            name: '李娟',
            age: 18,
            birthday: '1992-01-04',
            address: '北京朝阳区',
          }, {
            name: '群',
            age: 20,
            birthday: '1992-01-05',
            address: '北京朝阳区',
          }
        ]
      }
    },
    methods: {
      handleAddData() {
        let addData=[{
          name: '耿亚楠',
            age: 20,
          birthday: '1992-01-05',
          address: '北京朝阳区',

        },{
          name: '找事',
            age: 20,
          birthday: '1992-01-30',
          address: '北京朝阳区',

        }];
          this.data.push(...addData);
      }
    }
  }
</script>

<style scoped>
[v-cloak]{
  display: none;
}
 >>> table{
    width: 100%;
    margin-bottom: 24px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border:1px solid #e9e9e9;
  }
 >>> table th{
    background: #02C1ED;
    color: #5c6b77;
    font-weight: bold;
    white-space: nowrap;
   height: 40px;
  }
 >>> table td,table th{
    padding: 8px 16px;
    border:1px solid #e9e9e9;
    text-align: left;
  }
 >>> table th a{
    display: inline-block;
    margin: 0 4px;
  }
 >>> table a.on{
    color: #FF2038;
  }
 >>> table th a:hover{
    color: #FF2038;
  }

</style>
