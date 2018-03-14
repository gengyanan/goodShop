<template>
    <i-row>
      <i-table boder :columns="column1" :data="data1"></i-table>
    </i-row>
</template>

<script>
    export default {
        name: "good-shop",
      data(){
          return{
            column1:[
              {
                title:'商品名称',
                key:'name',
                align:'center',
              },{
                title:'商品单价',
                key:'price',
                align:'center',
              },
              {
                title:'购买数量',
                key:'count',
                align:'center',
                render:(h,params)=>{
                  return h('div',[
                    h('Button',{
                      props:{
                        type:'primary',
                        size:'small',
                      },
                      style:{
                        marginRight:'15px'
                      },
                      attr:{
                        disabled:'disabled',
                      },
                      on:{
                        click:()=>{
                          this.handleReduce(params.index)
                        }
                      }
                    },'-'),
                    h('span',{
                      props:{
                        type:'primary',
                        size:'small',
                      },
                      style:{
                        marginRight:'15px',
                      },
                      on:{
                        click:()=>{
                          this.handleNum(params.index)
                        }
                      }
                    },params.row.count),

                    h('Button',{
                      props:{
                        type:'primary',
                        size:'small',
                      },
                      style:{
                        marginRight:'15px'
                      },
                      on:{
                        click:()=>{
                          this.handleAdd(params.index)
                        }
                      }
                    },'+')
                  ])



                }
              },
              {
                title:'操作',
                key:'action',
                align:'center',
                render:(h,params)=>{
                  return h('Button',{
                    props:{
                      type:'primary',
                      size:'small',
                    },
                    style:{
                      marginRight:'5px'
                    },
                    on:{
                      click:()=>{
                        this.remove(params.index)
                      }
                    }
                  },'Delete')
                }
              }

            ],
            data1:[
              {
                id:1,
                name:'iphone 7',
                price:6188,
                count:1

              },
              {
                id:2,
                name:'ipad Pro',
                price:5888,
                count:1
              },
              {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1
              }
            ],
          }
      },
      methods:{
          remove(index){
            this.data1.splice(index,1)
          },
        handleReduce(index){
          console.log(index);
          if(this.data1[index].count==1){
            return;
          }
          this.data1[index].count--;

        },
        handleAdd(index){
            this.data1[index].count++;
        }

      }
    }
</script>

<style scoped>

</style>
