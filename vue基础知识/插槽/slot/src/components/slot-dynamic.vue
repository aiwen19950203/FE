<template>
  <div>
    <header style="font-size=20px">
      <slot name="header"></slot>
    </header>
    <footer style="font-size=20px">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        lastName: "爱文",
        firstName: "史",
      },
    };
  },
};
</script>

<style>
</style>