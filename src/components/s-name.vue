<template>
  <div>
    <s-child>
      <h2 slot="header">title</h2>
      <p>正文内容</p>
      <p>更多的正文内容</p>
     <div slot="footer">底部信息</div>
    </s-child>
    <router-link to="/model">model</router-link>
    <drop-downs></drop-downs>
  </div>
</template>

<script>

    import SChild from "./s-child";
    import DropDowns from "./dropDown";


    export default {
      components: {

        DropDowns,
        SChild}

    }
</script>

<style scoped>

</style>
