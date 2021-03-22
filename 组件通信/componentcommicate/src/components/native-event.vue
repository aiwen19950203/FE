<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name:'NativeEvent',
  props: ["value"],
};
</script>

<style>
</style>