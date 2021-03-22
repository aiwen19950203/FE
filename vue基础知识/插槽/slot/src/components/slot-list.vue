<template>
    <div class="slot_content">
        <!-- <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <slot name="todo" v-bind:todo="todo"></slot>
        {{ todo.text }}
      </li>
    </ul> -->
    </div>
</template>

<script>
export default {
    props: {
        url: {}
    },
    data() {
        return {
            baidu: 'http://www.baidu.com',
            user: {
                name: '小爱同学'
            },
            filteredTodos: [
                { id: 1, text: '小爱同学' },
                { id: 1, text: '小名同学' },
                { id: 1, text: '小和同学' }
            ]
        }
    }
}
</script>

<style></style>
