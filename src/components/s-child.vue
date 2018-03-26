<template>
    <row>
      <div class="container">
          <div class="header">
            <slot name="header"></slot>
          </div>
        <div class="main">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </row>
</template>

<script>
    export default {
        name: "s-child"
    }
</script>

<style scoped>

</style>
