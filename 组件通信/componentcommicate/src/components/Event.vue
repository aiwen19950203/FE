<template>
    <div>
        <h1>{{ post.title }}</h1>
        <div v-html="post.content"></div>
        <button @click="$emit('enlarge-text')">变大</button>
    </div>
</template>

<script>
export default {
    name:'Event',
    components: {

    },
    props: {
        post:Object,
        // postFontSize:Number
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
