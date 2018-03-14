<template>
    <div id="app">
        <span v-once>{{message}}</span>
        <div v-once>
            <span>{{message}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                message:'nnisss'
            }
        }
    }
</script>

<style scoped>

</style>
