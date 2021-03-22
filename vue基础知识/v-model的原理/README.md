# 1.  vue 语法中的 v-model

在 vue 的语法中 v-model 其实 是 一种简单的写法  其中 v-model="userName" 就相当于下面的这种写法

```js
<input :value="userName" @input="userName=$event.target.value" />
```

# 2. 在自定义组件中使用 v-model

```html

      <customer-input v-model="fatherNumber"></customer-input>

		
```

组件注册使用的代码就省略了哈，以后忘记的时候再说吧

子组件

```js
// 指定 props 属性 记住 名称 必须叫做 value

props:['value']

在子组件中定义
<input :value="value" @input="$emit('input',$event.target.value)"/>


```

# 3. 自定义 v-model

通过上面的学习我们知道了 组件上 的 v-model 会默认利用 名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能 value 属性 用于不同的目的 model 选项可以避免这样的冲突

子组件

```html
      <input type="checkbox" :checked="checked" @change="onChange">
```

js

```js
  1. 指定 prop 名称，并且在 props 里面定义出来 和 model 定义的 prop 的名称相同
  2. 派发 指定的 event 名称的事件，并且将值传递过去


model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:{
            type:Boolean
        }
    },
    onChange(v) {
         
            this.$emit('change',v.target.checked)
        }
```

父组件直接使用 v-model 即可

```html
  <self-vmodel v-model="ishow"></self-vmodel>
```

这样  `ishow` 的值 会传入这个名为 checked 的 prop 同时当 这个自定义组件 触发一个change 事件  并且附带一个新值的时候 就能实现了数据的双向绑定 

