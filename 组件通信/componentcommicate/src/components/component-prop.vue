<template>
  <div>
    <h3>这个组件用来练习 prop 的写法</h3>
    {{ likes }}
    {{ isPublished }}
    {{ componentArr }}
    {{ author }}
  </div>
</template>

<script>
export default {
  // prop 属性的名称是大小写是不敏感的 所以浏览器解释为小写字母 这意味着当你使用 dom 中的模板驼峰命名
  // 发的prop 名字就等价于 短线分割命名的规范
  props: {
    likes: [Number],
    isPublished: [Boolean],
    componentArr: [Array],
    // author:[Object]
    //  对于prop 属性来讲 从外部传递的数据 会覆盖掉组件内部的数据 
    //  比如author 父组件 传的值是 34 在子组件中显示的就是 34
    author: {
      type: Object,
      default: () => {
        return {
          name: "hah",
          age: 12,
        };
      },
    },
  },
};
</script>

<style>
</style>