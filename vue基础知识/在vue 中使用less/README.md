# 1. 步骤

```js
npm install less less-loader
```





# 2. 错误

```MD
Syntax Error: TypeError: this.getOptions is not a function
 @ ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-
 loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/
 postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules
 /cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?
 vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& 4:14-473 14:3-18:5 15:22-481

```

## 3. 原因

less-loader 的版本太高了 安装 7.0 版本即可



# 4. 解决

```yml
npm uninstall less-loader
npm install less-loader@7.x
```

