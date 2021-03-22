<template>
    <div>
        <!-- 子组件中通过 分发事件的方法去改变父组件的值 -->
        <!-- 步骤 在子组件里面 $emit 事件，在父组件里面 绑定事件的处理函数即可 -->
        <!-- 通过事件的方式 也可以传递一个参数 这个参数可以在父组件中的事件的第一个参数中获取到  -->
        <!-- 在子组件上使用 v-model 相当于 绑定的 是 :value 这个值 -->
        <button @click="$emit('increase')">点击变大</button>
        <button @click="$emit('decrease',-1)" style="margin-left:10px">点击减小</button>
    </div>
</template>

<script>
export default {
     name:'',
    components: {

    },
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
