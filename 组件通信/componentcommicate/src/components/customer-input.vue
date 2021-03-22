
<template>
  <div>
      <input type="text" class="ipt" :value="value" @input="$emit('input',$event.target.value)" />
  </div>
</template>

<script>
export default {

    name:'CustomerInput',
    props:['value']

}
</script>

<style lang='less' scoped>
    .ipt {
        height: 30px;
        line-height: 30px;
    }
</style>