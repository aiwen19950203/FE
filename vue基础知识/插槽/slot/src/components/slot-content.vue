<template>
  <div class="slot_content">
    <a :href="baidu" class="nav-link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
  },
  data() {
    return {
      baidu: "http://www.baidu.com",
    };
  },
};
</script>

<style>
</style>