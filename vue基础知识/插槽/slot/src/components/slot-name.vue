<template>
  <div class="slot_content">
    <!-- 
      具名插槽的使用步骤  
        1. 在子组件中指定插槽的名称
        2. 没有指定名称的 插槽 的name 为 default
        3. 父组件在渲染的时候 会 使用 <template v-slot:header>去渲染相应的页面结构
        4. 默认插槽 是 <template v-slot:default>
        5. 注意 v-slot 的使用 只能在 <template></template>这种情况
        
    -->


    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>