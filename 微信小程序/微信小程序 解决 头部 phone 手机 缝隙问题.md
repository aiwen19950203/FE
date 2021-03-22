

# 微信小程序 解决 头部 phone 刘海屏 缝隙问题

1. 判断手机型号是不是 iPhone系列

   **util.js**

   ```js
       isIpx() {
           const sysInfo = wx.getSystemInfoSync()
           const { model } = sysInfo
           const arr = ['iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR']
           let isIpx = false
           arr.forEach((item) => {
               if (model.includes(item)) {
                   isIpx = true
               }
           })
           return isIpx
       },
   ```

   

2. 全局引入一个变量 接收 这个方法的返回值，不同的项目可能有所不同，灵活运用

   **hook.js**

   ```js
   const mixinsData = {
       $IPX: util.isIpx(),
   }
   ```

   在所有组件和所有页面中使用 `mixinsData`

   ```js
   Page = (options) => {
       for (let [key, value] of Object.entries(hook)) {
           if (allowOption.includes(key)) {
               options.data = {
                   ...value,
                   ...options.data,
               }
           }
           if (typeof value === 'function') {
               const originFunction = options[key]
               options[key] = function (...args) {
                   value.call(this, ...args)
                   return originFunction && originFunction.call(this, ...args)
               }
           }
       }
       originPage(options)
   }
   Component = (options) => {
       if (typeof options.methods == 'object') {
           for (let [key, value] of Object.entries(hook)) {
               if (allowOption.includes(key)) {
                   options.data = {
                       ...value,
                       ...options.data,
                   }
               }
               if (typeof value === 'function') {
                   const originFunction = options.methods[key]
                   options.methods[key] = function (...args) {
                       value.call(this, ...args)
                       return originFunction && originFunction.call(this, ...args)
                   }
               }
           }
       }
       originComponent(options)
   }
   ```

3. 处理头部刘海屏的缝隙问题

   ```wxml
   
   ```

4. 处理底部导航栏点击失效的问题

   