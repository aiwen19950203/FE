<template>
    <div>

        <h1>
            {{ post.title }}
        </h1>

        <button >我来改变父组件的值</button>
        
    </div>
</template>

<script>
export default {
     name:'Son',
    components: {

    },
    props: {
        // sondata:{
        //     type:Array
        // },
  
        post:{
            type:Object
        }
    },
    data() {
        return {
            count:0
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
