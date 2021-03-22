<template>
  <div class="pink">
      <strong>Error!!!</strong>
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .pink {
        background-color:pink;
        height: 40px;
        line-height: 40px;
        margin: 20px auto;
        width: 80%;
        padding: 10px;
    }
</style>