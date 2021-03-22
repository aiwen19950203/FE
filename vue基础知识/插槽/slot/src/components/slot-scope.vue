<template>
  <div class="slot_content">
    <!-- 在 语速 -->
    <span>
      <!-- slot 插槽上绑定的属性  -->
      <slot :user="user">{{ user.lastName }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{
        lastName:'爱文',
        firstName:'史'
      }
    }
  }
};
</script>

<style>
</style>