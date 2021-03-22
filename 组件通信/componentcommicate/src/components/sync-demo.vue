<template>
  <!--
     用途 和 prop 数据进行双向绑定  但是现在子组件可以变更父组件的值没有明显的变更来源 
     写到这其实还仅仅只是一个组件相互传值 并且传递参数的过程 
     下面才是 sync 的 用法
       
  -->
  <div>
    来自父元素的值 {{ title }} 来自父元素的值 {{ name }}
    <button @click="$emit('update:title', newtitle)">点我</button>
    <button @click="$emit('update:name', newName)">点我改变名字</button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      newtitle: "我是新的标题",
      newName:'小爱同学'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
