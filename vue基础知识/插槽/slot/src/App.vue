<template>
    <div id="app">
        <!-- slot 的内容 支持 自定义 什么都可以 甚至是 组件的形式 -->
        <base-slot>小哎同学</base-slot>
        <slot-content :url="baidu">
            <base-slot>小哎同学</base-slot>
        </slot-content>
        <slot-data></slot-data>
        <!-- 如果组件之间有内容 就显示指定的内容 如果组件中间没有内容就显示默认的内容 -->
        <slot-default-content></slot-default-content>
        <!--
       作用域插槽 在 父组件中可以访问到子组件插槽传递过来的数据 但是父级模板中只能渲染父级自己的数据 现在可以使用带值 的
       v-slot 来定义我们提供插槽的 prop 的名字  v-slot:default 的 名称可以根据自己的喜好或者团队的约定去实现
     -->

        <slot-name>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </slot-name>

        <!-- 插槽的缩写  可以将插槽之前的所有内容替换为 # 这种情况 在 插槽有名字的时候生效 
       如果希望缩写生效的话 应该明确 插槽名称
      -->

        <slot-scope>
            <template v-slot:default="slotProps">
                {{ slotProps.user.firstName }}
            </template>
        </slot-scope>
        <!-- 
      当提供的内容只有默认插槽的时候 组件的标签才会被当成插槽的模板来使用 这个时候我们也可以将 v-slot:default 直接在组件上
      但是只要出现多个插槽 始终所有的插槽 都用 template 模板语法
    -->

        <slot-scope v-slot:default="slotScope">
            {{ slotScope.user.firstName }}
        </slot-scope>

        <slot-scope v-slot="slotScope">
            {{ slotScope.user.firstName }}
        </slot-scope>

        <slot-scope v-slot="{ user: person }">
            {{ person.firstName }}
        </slot-scope>

        <!-- 解构定义插槽的 后备内容 用于插槽 prop 是 undefined 的情形 -->

        <hr />
        <slot-scope v-slot="{ user = { firstName: 'Guest' } }">
            {{ user.firstName }}
        </slot-scope>

        <slot-dynamic>
            <template v-slot:[dynamicName]> 头部</template>
        </slot-dynamic>

        <!-- 其他实例 可以利用插槽的 prop 将插槽转为 可复用的的模板  这些模板可以基于 输入的  prop 渲染出 不同的内容 -->
        <slot-list :todos="todos">
            <template v-slot:todo="{ todo }">
                <!-- <span v-if="todo.isComplete">✓</span> -->
                {{ todo.text }}
            </template>
        </slot-list>

        <!-- 编译作用域 -->
        <slot-run-scope>
        
                <!--这个 message 会去 cpn组件中找-->
                <h2>我是子组件 {{ message }}</h2>

                <!--会查找当前模板下的，cpn组件下的 isShow，它是false，该按钮不会显示-->
                <button v-show="isShow">我是子组件的按钮</button>
         
        </slot-run-scope>
    </div>
</template>

<script>
import BaseSlot from './components/base-slot'
import SlotContent from './components/slot-content'
import SlotData from './components/slot-data'
import SlotDefaultContent from './components/slot-default-content'
import SlotName from './components/slot-name'
import SlotScope from './components/slot-scope'
import SlotDynamic from './components/slot-dynamic'
import SlotList from './components/slot-dynamic'
import SlotRunScope from './components/slot-run-scope'

export default {
    components: {
        BaseSlot,
        SlotContent,
        SlotData,
        SlotDefaultContent,
        SlotName,
        SlotScope,
        SlotDynamic,
        SlotList,
        SlotRunScope
    },
    data() {
        return {
            baidu: 'http://www.baidu.com',
            dynamicName: 'header',
            todos: [
                { id: 1, text: '小爱同学' },
                { id: 1, text: '小名同学' },
                { id: 1, text: '小和同学' }
            ],
            isShow: false,
            message: 'world'
        }
    }
}
</script>

<style></style>
