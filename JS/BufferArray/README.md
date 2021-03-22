# 1. ArrayBuffer 字节数组

- 不能直接操作 ArrayBuffer 的内容，而是要通过 `类型数组对象` 或  `dataView` 对象来操作，他们会将 缓冲区中的数据中表示为特定格式，并通过这些 格式来读写缓冲区的内容。

```js
const buffer = new ArrayBuffer(8)
- 创建 指定大小的 ArrayBufffer 的 大小 单位为字节
- 一个指定大小的 ArrayBuffer 对象， 其内容初始化为 0
- 异常 如果 length 大于最大 的安全整数范围 或者负数 会抛出 一个 `RangeError`的异常

console.log(buffer.byteLength)
```

# 2. 以现有的数据获取 ArrayBuffer

- 以 Base64 字符串
- 从本地文件

**属性**

**ArrayBuffer.length** 是**构造函数**的 length 属性 而不是 buffer 的实例化对象的 length ，其值为1

```js
const buffer = new ArrayBuffer(8)

console.log(buffer.byteLength)//8
console.log(buffer.length)//undefined

console.log(ArrayBuffer.length)//1
```



**ArrayBuffer.prototype.byteLength** - 待定 不看

只读属性，表示 ArrayBuffer 的 byte 的大小在 ArrayBuffer 构造完成时生效 不可改变

**get ArrayBuffer**   - 也是待定看不懂



**ArrayBuffer.prototype **- 暂时看不懂

通过 ArrayBuffer  的原型 对象 为 所有的 ArrayBuffer  对象 添加属性 



**ArrayBuffer.prototype.constructor** 指定 构造函数



**方法**

ArrayBuffer.slice() 方法  返回一个 新的 ArrayBuffer 他的内容是 ArrayBuffer 的字节的副本，从 bengin 到结束 如果  begin 或者end 是负数 ，则指的 是数组 末尾 开始的索引 而不是 从头开始I的索引

**使用**

> var buffer =  new ArrayBuffer(8)
>
> var view = new Int32Array(buffer)

# 3. 类型化数组

Javascript 类型化数组是一种 类似数组的对象，并且提供了 一种 可以访问原始 二进制数据的机制。正如 你可能已经知道，Array  存储的对象 动态的增多和女减少，并且可以存储 任何 javascript 的值。但是随着web 应用 程序 变得越来越大，尤其是一些新增的功能，如音视频功能，访问 websocket 的原始数据等，很明显有的时候如果仅仅 js 代码 可以快速方便地通过数组来操作 原始 的二进制数据将会非常有帮助。



但是，不要把类型化数组 与 正常数组混淆，因为在类型数组上调用 Array.isArray() 会返回false。 此外，并不是任何可用于 正常数组的方法都能被类型化数组所支持。