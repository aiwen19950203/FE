#  data 是函数的原因



vue 组件中的 data 不能为对象，对象是引用类型，组件可能会被多个实例共同引用。如果 data 值为对象，将导致多个实例共享一个对象，其中一个组件改变 data 属性值，其他实例也会受到影响。



data 为函数，函数有自己独立的 **作用域** 返回 对象的拷贝 导致 每个实例都有自己独立的对象，实例之间互不影响，每个实例的 data 是独立互不影响的



原因和 vue 的设计无关 和 JS 特性相关

```js
var zujian = function() {}

zujian.prototype.data = {
    message:'Love'
} 

var d1 = new zujian()
var d2  = new zujian()
d1.data.message = 'henhen'
d2.data.message = '哈哈'

console.log('打印d1', d1.data.message);
console.log('打印d2', d2.data.message);
```

运行结果

```md
[Running] node "g:\front-end\vue基础知识\data 是函数的原因\1.js"
打印d1 哈哈
打印d2 哈哈

[Done] exited with code=0 in 0.089 seconds

```



以上两个实例都引用同一个对象，当其中一个实例属性改变时，另一个实例属性也随之改变，只有当两个实例都拥有自己的作用域时，才不会相互干扰。



```js
var zujian = function() {

    this.data = this.data() 
}

zujian.prototype.data = function() {
    return {
        message: 'LOVE'
    }
}

var d1 = new zujian()
var d2  = new zujian()
d1.data.message = 'HEHE'
// d2.data.message = '哈哈'

console.log('打印d1', d1.data.message);
console.log('打印d2', d2.data.message);
```



运行结果

```yaml
[Running] node "g:\front-end\vue基础知识\data 是函数的原因\tempCodeRunnerFile.js"
打印d1 HEHE
打印d2 LOVE

[Done] exited with code=0 in 0.09 seconds
```



 如果 data 是一个函数的话，这样每复用一次组件就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让每个组件实例维护各自的数据，而单纯的写成对象形式，就会使得所有组件实例共用一份 data 



  