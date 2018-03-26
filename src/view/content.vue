<template>
    <i-row>
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <button @click="show">检测参数</button>

      <ul>
        <li v-for="(item,index) in datas">
          <router-link :to="{name:'content',params:{id:item.id}}">{{item.content}}</router-link>
        </li>
      </ul>
      <p>{{field.title}}</p>
      <p>{{field.content}}</p>

    </i-row>
</template>

<script>
    import Button from "iview/src/components/button/button";

    export default {
      components: {Button},
      name: "content",
      data(){
        return {
          id:0,
          datas:[
            {id:0,title:'http开源免费',content:'这是内容。。。。'},
            {id:1,title:'http开源免费1',content:'这是内容1。。。。'},
            {id:2,title:'http开源免费2',content:'这是内容2。。。。'},
            {id:3,title:'http开源免费3',content:'这是内容3。。。。'},
          ],
          field:[],
        }
      },
      watch:{
        '$route'(to,from){
          this.load();
        }
      },
      mounted(){
        this.load();
      },
      methods:{
        show(){
          console.log(this.$route);
        },
        load(){
          let id=this.$route.params.id;
          console.log(this.datas.length);
          for(let i=0;i<this.datas.length;i++){
            if(this.datas[i].id==id){
              this.field=this.datas[i];
            }
          }
        }
      }


    }
</script>

<style scoped>

</style>
