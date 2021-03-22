# 1. 默认插槽

作用：我们在使用组件的时候想要让组件具有复用性，比如我们在封装一个消息弹框的时候，可能样式是相同的，但是内容是需要定制的

 插槽的内容是随便写的 

甚至可以加上字体图标

还能设置样式

```html
  <div class="pink">
      <strong>Error!!!</strong>
      <slot></slot>
  </div>
```

APP.vue

```html
<slot-study>hhaha</slot-study>
<slot-study>呵呵呵</slot-study>
```



# 2. 编译作用域-暂时还不能理解这东西

应该是引出 作用域 prop 吧 



> 父级模板里所有的内容都是在父级作用域中编译的
>
> 子模板里的所有内容都是在子作用域中编译的

想在插槽中使用数据

```html
<navigation-link url="/profile">
  Logged in as {{ user.name }}
</navigation-link>
```

该插槽跟模板的其他地方一样可以访问相同的实例 property ，具有相同的作用域，而不能访问 `navigation-link ` 的作用域。比如 `url` 是访问不到的

```html
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```

