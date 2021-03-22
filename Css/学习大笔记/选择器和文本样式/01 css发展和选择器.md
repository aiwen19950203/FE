# 1. css发展和由来

早起的有许多网站但是没有 css 的加持都很丑，如果在 html 改变样式 会使得代码的结构非常臃肿

于是就有了css 实现了结构和样式相分离 

css 称为样式表或者 层叠样式表 主要用于设置html 页面中 文本内容布局，图片的外形，以及版面布局等外观样式

css 作为html 的基础 提供了 丰富的功能 如颜色、字体、背景的控制以及整体的排版，还可以针对不同的浏览器设置不同的样式



# 2. 引入方式

## 2.1 行内样式

在标签上通过 style 的形式去设置样式其基本的格式和例子如下

格式

```html
<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>

    <div style="font-weight: 700; width: 200px; height: 200px; background-color: #222;
     color: #fff; text-align: center; line-height: 200px;" >
      
    </div>
```

注意

- style 其实是属于 元素的标签属性
- 属性和值之间是 冒号
- 不同属性之间是分号

## 2.2 内部样式表

在 html 的 头部标签之中 插入 style 在style 中写入样式语法和代码=如下

```html
<head>
<style type="text/CSS">
    选择器 { 
      属性1:属性值1;
      属性2:属性值2; 
      属性3:属性值3;
    }
</style>
</head>
```

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/CSS">
        .box {
            text-align: center;
            color: red;
            font-size: 12px;            
            background-color: blue;
            
        }
    </style>

</head>
```

注意

- style 一般是在 head 中的 title 标签之后 也可以放在 html 文档中的任何部分 
- 其中 style 的 type 是可以省略

### 代码风格

- 紧凑 各个属性不换行

- 展开（推荐）

  ```css
          .box {
              text-align: center;
              color: red;
              font-size: 12px;            
              background-color: blue;
              
          }
      </style>
  ```

### 大小写

- 样式选择器属性名 属性值得关键字全部使用小写字母属性 属性字符串允许使用小写
## 2.3 外部样式表

  把样式全部写在一个 css文件里面 然后 通过 link 标签 将外部的样式表引入到html 文档中

  ```html
      <link rel="stylesheet" href="wbysb.css">
  ```

  注意

- 在 head 标签中引入 必须指定 link 标签的三个属性 具体如下
- href css 文件的存放路径
- type 定义的是连接文档的类型 指定的是 text/CSS 不过被我们省略了
- rel 指的是当前问文档与被连接文档之间的关系 在这里我们需要 指定为 stylesheet 表示 被连接的文档 是一个样式表文件

# 3. css 样式规则

1. 选择器用于指定 css 作用的标签
2. 属性和属性值之间使用 冒号分割
3. 属性是对指定的对象设置样式属性 如字体大小 文本颜色
4. 多个属性之间使用 `;` 进行分割

# 4. css 选择器

要想将你想作用的样式选择出来 这时候就会需要 css 选择器了

## 4.1 标签选择器（元素选择器）

  标签选择器是指用html标签名称作为选择器，按标签名称分类，为页面中某一类标签指定统一的 css 样式。

比如所有的 div 标签 所有的 span 标签 

```css 
div {
    witth:200px;
    height: 200px
}
```

标签选择器最大的优点就是快速为页面中同类型的 标签统一样式，同样这女也是他的缺点 不能设计差异化样式。

如果想要差异化选择不同标签就不行了。

## 4.2 类选择器（重点）

**作用：**

  主要作用可以选择一个或者多个标签

**用法：**

在html 中 使用 class 在 css 中 用 点 调用

```html
.box {
	width:200px
}
```

```html
<div class='box'>
    
</div>
```

**注意：**

- 类名选择器使用 . 进行标识，后面紧跟类名。
- 长名称或者词组 中使用 _ 来分割单词
- 不要纯数字、中文等命名，尽量使用英文字母来表示



## 4.3 多类名选择器

我们可以给标签指定多个类名，从而达到更多的选择目的

**注意**

- 样式效果显示 和 HTML 元素中的类名 没有先后顺序的关系 受  css 样式 书写的上下顺序有关系
- 多个类名中 用空格 隔开

```html
            .fw {
            font-weight: 700;
        }

        .red {
            color: red; 
        }
<span class="fw red">G</span>
```

# 4.4 id 选择器

id 选择器 使用 # 表示

id 名 即为 HTML 元素的 id 属性值，大多数 HTML 元素 都可以定义 id 属性，元素的 id 是唯一的，只能对应于文档中某一个具体的元素

```html
    <style>
        /* 居中 */
        body {
            text-align: center;
            padding-top: 200px;
        }
        /* 通用样式 span */
        .fw {
            font-weight: 700;
        }
        /* id 选择器的 权重 比 class 的权重更高 颜色是蓝色的 */
        .red {
            color: red; 
        }

        #blue {
            color: blue;
        }
  

    </style>
```



## 4.5 id 选择器和类选择器的区别

W3C 标准规定，在同一个页面，不允许有相同名字的 id 对象 但是 允许相同名字的 class id 选择器最大的不同于在于 **使用次数**

## 4.6 通配符选择器

通配符匹配页面上所有元素 用 * 表示

```css
* {
    margin: 0;
    padding: 0;
}
```

清除所有的 HTML标记的默认边距

## 4.7 对比

| 选择器       | 作用                            | 缺点                     | 使用情况   | 用法                 |
| ------------ | ------------------------------- | ------------------------ | ---------- | -------------------- |
| 标签选择器   | 可以选出所有相同的标签，比如div | 不能差异化选择           | 较多       | div { color：red;}   |
| 类选择器     | 可以选出1个或者多个标签         | 可以根据需求选择         | 非常多     | .nav { color: red; } |
| id选择器     | 一次只能选择器1个标签           | 只能使用一次             | 不推荐使用 | #nav {color: red;}   |
| 通配符选择器 | 选择所有的标签                  | 选择的太多，有部分不需要 | 不推荐使用 | * {color: red;}      |

## 4.8 规则

- 尽量少使用通配符选择器
- 不适用 id 选择器
- 不使用 无具体意义的标签选择器 如 div span hah

