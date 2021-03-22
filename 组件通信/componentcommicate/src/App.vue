<template>
  <!-- <h3>{{fatherNumber}}</h3> -->

  <!-- <event v-for="post in posts" :key="post.id" :post="post" @enlarge-text="enLarge" :style="{fontSize:postFontSize + 'em'}"> </event> -->

  <!-- <change-number @increase="fatherNumber++" @decrease="onDecrease" ></change-number> -->

  <!-- 
        在自定义组件上使用 v-model 的步骤 首先 需要知道的是 v-model 默认的语法 是默认 监听了 @input 事件 并且 绑定了 :input  属性的值 了解了 这个之后 现在开始在
        自定义组件上使用 v-model 所以 在子组件上必须有 一个名字 为 value 的 prop 属性来接受 父组件 :value 属性
        在子组件中 的 事件中 应该触发 一个 @input 事件 并且将 输入的值（e.target.value） 传递 过来 
       -->
  <!-- <h3>{{ fatherNumber }}</h3>

      <hr/>

      <customer-input v-model="fatherNumber"></customer-input>


      <input type="text" v-model="userName" class="father_ipt"> 

      <input type="text" :value="userName" @input="onIpt">

      <div> {{ userName }} </div> -->

  <!-- <slot-study>错误发生了</slot-study> -->

  <!-- <component v-bind:is="dynamicComponent"></component> -->

  <!-- 动态组件 引入 在一个页面上有多个组件同时引入 或者需要实现 按需加载 并通过后端接口 控制组件的显示 -->

  <!-- <component v-for="(item,index) in compList" :is="item.path" :key="index" ></component> -->

  <!-- :is 只适用于组件动态引入的情况 比如 下面这样的写法就是错误的 这种不叫做组件的动态引入了 所以不能这样使用 -->
  <!-- 
        Property or method "component4" is not defined on the instance but referenced during render.
       -->
  <!-- <component :is="component4"></component>  -->

  <!-- 
      在动态引入组件的过程中 需要掌握的三个点 
      1. currentTab 的默认值不能为空 应该为数组的第一项
      2. 组件注册的时候的名字 应该注意首字母大写 或者女全小写 关于命名规范最好还是 详细的看一下文档 记住 命名规范 
      3. 现在这个水平 你需要手动来实现一遍了我觉得 不要小看样式 
     -->

  <!-- <div id="dynamic-component-demo" class="demo">
      <h3>
        {{ fatherNumber }}
      </h3>

        <customer-input v-model="fatherNumber"></customer-input>
    </div> -->
  <!-- <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component> -->

  <!-- <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-btn',{active:currentTab===tab}]"
        @click="currentTab=tab"
      >
        {{ tab }}

      </button>

      <component :is="currentTabName" class="tab" ></component>


    </div> -->

  <!-- props -->
  <!-- <div>
     <component-prop :likes='num' :is-published='isPublished' :component-arr="demoArr" :author="author"></component-prop>
  </div> -->

  <!-- 自定义v-model 名为 value 的 prop 和名为 input 的事件 但是像单选框  多选框 等类型的输入控件 会把 value 属性 用于不同的目的 model 选项可以解决这样的冲突 -->
  <!-- 父组件中的 isshow 的值将会传入 名为 heh 的 prop  同时当 self-vmmodel 触发ee 的事件的时候 这个并福附带一个新的数值的时候这个数值将会被更新 -->
  <!-- <div>
    <self-vmodel v-model="ishow"></self-vmodel>
  </div> -->

  <!-- 在很多情况下我们在组件的根元素上直接监听一个原生事件 这样你可以 使用事件的 .native 修饰符  记住在组件上如果想使用 事件的话 记得加上 .native 修饰符修饰-->
  <!-- <div>
    <h3>{{ text }}</h3>
    <native-event v-model="text" @focus.native="onFocus(text)" ></native-event>
  </div> -->
  <!-- sync 修饰符 -->
  <div>
    <!-- <sync-demo
      :title="doc.title"
      @update:title="doc.title = $event"
    ></sync-demo> -->
    <!-- 上面的写法和下面的写法是一样的 -->
    <!-- <sync-demo :title.sync="doc.title">

    </sync-demo> -->

    <sync-demo v-bind.sync="doc">

    </sync-demo>

    <!-- 
      注意 1. .sync 修饰的 v-bind 不能和表达式一起使用 只能 提供你想绑定的属性
      2. 如果我们用同一个对象设置 多个 prop 的时候 也可以  使用 v-bind.sync ="doc"
      需要注意的是 如果对象有多个属性就需要写多个 props 的值 然后依次添加用来 数据更新的 # 
     -->
  </div>
</template>

<script>
// import Event from "./components/Event.vue"
// import ChangeNumber from './components/change-number.vue'
// import CustomerInput from './components/customer-input'
// import SlotStudy from './components/slot-study'
// import DynamicComponent from './components/dynamic-component'
// import component1 from './components/dynamic-components/component1'
// import component2 from './components/dynamic-components/component2'
// import component3 from './components/dynamic-components/component3'
// import component4 from './components/dynamic-components/component4'
// import TabHome from './components/official-demo/tab-home'
// import TabPosts from './components/official-demo/tab-posts'
// import TabArchive from './components/official-demo/tab-archive'
// import ComponentProp from './components/component-prop'
// import SelfVmodel from './components/self-vmodel'
// import NativeEvent from './components/native-event'
import SyncDemo from "./components/sync-demo";

export default {
  name: "",
  components: {
    // Event,
    // ChangeNumber
    // CustomerInput
    // SlotStudy
    // DynamicComponent
    // component1,
    // component2,
    // component3,
    // component4,
    // TabHome,
    // TabPosts,
    // TabArchive,
    // SelfVmodel
    // NativeEvent
    SyncDemo
  },
  props: {},
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "hehehhe" },
        { id: 2, title: "Blogging with Vue", content: "hehehhe" },
        { id: 3, title: "Why Vue is so fun", content: "hehehhe" },
      ],
      postFontSize: 1,
      fatherNumber: 0,
      userName: "小爱同学",
      compList: [], //组件数组
      tabs: ["Home", "Posts", "Archive"],
      currentTab: "Home",
      num: 43,
      isPublished: true,
      demoArr: [1, 2, 3],
      author: {
        name: "小爱同学",
        age: 34,
      },
      // checked:false
      ishow: false,
      text: "文本内容",
      doc:{
        title:"老人与海",
        name:'海明威'
      }
    };
  },

  watch: {},
  created() {
    // 假设这组件是通过后端请求得到的
    this.compList = [
      { id: "1", path: "component1", name: "组件1", ishow: true },
      { id: "2", path: "component2", name: "组件2", ishow: false },
      { id: "3", path: "component3", name: "组件3", ishow: true },
    ];
  },
  mounted() {},
  methods: {
    enLarge() {
      console.log("打印事件触发了");
      this.postFontSize += 0.1;
      console.log("打印", this.postFontSize);
    },
    onDecrease(num) {
      console.log(num, "看看能不能获取到参数");

      this.fatherNumber += num;
    },

    onIpt(e) {
      // console.log(e,'看看事件参数是什么');
      // this.userName = this.$event.target.value

      console.log(e, "看看事件参数是什么");

      // 通过打印数据发现 e.target.value 中绑定的 恰好是输入的值

      this.userName = e.target.value;
    },

    onFocus(e) {
      console.log(e);
    },
  },
  computed: {
    // TabHome Home
    currentTabName: function () {
      return `Tab${this.currentTab}`;
    },
  },
};
</script>

<style scoped lang="less">
.father_ipt {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
}
.tab-btn {
  // padding: 6px 10px;
  // border-top-left-radius: 3px;
  // border-top-right-radius: 3px;
  // border: 1px solid #ccc;
  // cursor: pointer;
  // background: #f0f0f0;
  // margin-bottom: -1px;
  // margin-right: -1px;

  padding: 10px;
  border-radius: 3px 3px 0 0; //左上角，右上角，右下角，左下角
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: -1px; // 解决边框线粗的问题
  margin-bottom: -1px;
  background: #f0f0f0;
}
.tab-btn:hover {
  background: #e0e0e0;
}
.tab-btn.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
