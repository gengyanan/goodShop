<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "anchor",
    props: {
      list: {
        type: Array,
      }
    },
    // render:createElement => {
    //     return createElement(
    //       'h'+this.level,
    //       [
    //         createElement(
    //           'a',
    //           {
    //             domProps:{
    //               href:'#'+this.title
    //             }
    //           },
    //           this.$slots.default
    //         )
    //       ]
    //     )
    // }
    render(createElement){
      let nodes = [];
      console.log(this.list);
      for (let i = 0; i < this.list.length; i++) {
        nodes.push(createElement('p', this.list[i]));

      }
      console.log(nodes);
      return createElement('div', nodes);
    }
  }
</script>

<style scoped>

</style>
