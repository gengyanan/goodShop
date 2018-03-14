<template>
    <i-row>
    <i-row  type="flex" justify="center" align="middle">
        <i-col span="8">
            <i-card>
                <p slot="title">全部书籍</p>
                <ul>
                    <li v-for="book in books">{{book.name}}</li>
                </ul>
            </i-card>
        </i-col>
        <i-col span="3">
            <Button type="primary" @click="add()" :class="{active:'active'}">Primary</Button>
        </i-col>
        <i-col span="8" offset="2">
            <i-card dis-hover>
                <p slot="title">筛选后的书籍</p>
                <ul>
                    <li v-for="item in booksData">{{item.name}}</li>
                </ul>
            </i-card>
        </i-col>

    </i-row>

        <i-col>
            <a href="http://www.apple.com" @click="handleClick('禁止打开',$event)">打开链接</a>
        </i-col>


    </i-row>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                message: 'nnisss',
                active:true,
                books: [
                    {
                        name: '《vue.js实战》'
                    },
                    {
                        name: '《javascript语音精粹》'
                    },
                    {
                        name: '《javascript高级程序设计》'
                    },

                ],
                booksData:[],
            }
        },
        methods: {
            add() {
               this. booksData=  this.books.filter(item=>{
                    return item.name.match(/javascript/);
                })
            },
            handleClick(message,event){
                event.preventDefault();
                window.alert(message);
            }

        }

    }
</script>

<style scoped>

</style>
