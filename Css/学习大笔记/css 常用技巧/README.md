# css 常用知识

# 目标

在写目标的时候需要在脑子想一想不看着笔记之前能不能大概知道 做到心里有数

- 元素显示和隐藏的常见的写法
- 书写鼠标常见的样式
- 精灵图产生的原因
- 能用滑动门做导航案例

# 元素的显示和隐藏

在 css 中 有三个与元素显示和隐藏相关的单词都比较常见 分别是 `visibility`，`display` 和 `overflow` 
他们的主要目的就是让一个元素在页面中消失，而不是在文档源码中删除，最常见的是我们在上网的时候的广告，当我们点击类似关闭的时候不见了，但是我们重新刷新或者点击下一页的时候元素又重新显示了

## display 显示

display 设置或检索对象是否显示 以及如何显示。

display：none 隐藏对象与之相反的是 display：block 除了转换为块级元素外，同时还有显示元素的意思。

特点：通过display：none 隐藏后不再保留位置

## visibiliy 可见性

设置对象是否显示

- visible 对象可见
- hidden 对象隐藏

特点：隐藏之后继续保留原有的位置（停职留薪，暂时保留着工位）

## overflow 溢出

设置对象超出 指定高度或者指定宽度的时候如何管理内容

- visible 不剪切内容也不添加滚动条，默认值
- auto 超出显示出滚动条，不超出不显示
- hidden 不显示超出对象尺寸的内容，超出部分隐藏
- scroll 不管超出内容与否，总是显示滚动条

# css 用户界面样式
所谓用户界面的样式，就是改变用户的一些操作的样式。比如更改鼠标的样式，表单的轮廓灯。但是比如滚动条的样式受到了很多浏览器的地址 因此我们就放弃了

## 鼠标样式 cursor 

|属性值|样式|
|---|---|
|default|默认值，不变|
|pointer|小手|
|move|移动|
|text|文本|
|not-allow|禁止移动|

## 轮廓 outline

语法
```html
 outline : outline-color ||outline-style || outline-width 
```
从开始一直就没有用到这东西  最常见的用法是去掉轮廓线
```css
style {
outline:none;
outline: 0
}

```

## 防止拖拽

```css
textarea {
    resize:none
}
```
通过设置 resize 为 none 右下角 禁止拖拽 默认是可以拖拽的

## 溢出文字用省略号显示

**white-sapce** 文本显示方式

white-space 设置对象内文本显示样式，通常我们使用默认一行显示内容

|属性|描述|
|---|---|
|normal|默认处理方式，换行|
|nowrap|强制一行显示，直到文本结束，或者遇到 br 标签才换行|

**text-overflow** 文字溢出的处理方式

通过设置省略标记（...） 表示文本的溢出

|属性|描述|
|clip|不显示省略标记（...）,而是简单的裁切|
|ellipsis|当文本溢出的时候显示省略标记|

注意 在使用这个属性的时候必须 强制文本在一行显示

**使用步骤总结**

1. 强制文本在一行显示

```css
white-space:nowrap
```

2. 超出部分用 设置隐藏

```css
over-flow:hidden
```

3. 设置文本溢出部分使用省略号想显示

```css
text-overflow：ellipsis

```

## vertical-align 属性 

设置行内块垂直对齐方式 

可以用 margin 0 auto 实现 有宽度的块元素 水平居中

可以用 text-align：center 实现 文字的居中对齐

但是我们没有讲过 垂直居中的属性 

vertical-align 垂直对齐 

```css
vertical-align:baseline | top | middle | bottom 
```

![](./assets/xian.jpg)

vertical-align 不影响块级元素中内容的对齐，只针对行内元素或者是行内块元素，特别是
行内块元素，通常用来**控制图片/表单与文字的对齐**

![](./assets/duiqi.png)

所以我们知道可以通过 vertical-align 控制图片和文字的垂直关系，默认的图片与文字的对齐方式是基线对齐

图片 或者表单等行内块元素，他的 `底线` 会和 父盒子的 `基线` 对齐。 这样 会造成一个问题，就是图片的底侧会有一个空白的缝隙


解决方案

1. 给 img 设置 vertical-align 设置为 middle 或者 top 让图片 不要基线对齐。 

2. 给图片转换为块级元素


# 精灵图 

精灵图又称为雪碧图，为了有效的减少 服务器 接受和发送请求的次数，提高页面的加载速度。出现了精灵图技术 

**本质**

简单来说， css 精灵图是一种 处理网页背景 图像的方式。 它将一个页面 涉及到 所有零星的背景 图片 都集中到一张大图中去，然后将大图应用于网页，这样，当用户访问该页面的时候，只需要想服务器发送一次请求，网页中的背景图像即可全部显示出来

**总结**

就是多个背景小图片集合到一张图片上，作为背景

> 我们的精灵图一般都是小的装饰性的背景图片 插入图片不能往上放
> 我们精灵图的 宽度 取决于 最宽的那个背景
> 摆放精灵图可以随意摆放 但是每个图片之间 间隔至少 偶数 像素合适
> 我们在精灵图的最低端 留一片空隙 方便我们以后添加其他精灵图 

# 结构伪类选择器（css3）

- E:first-child

选择父元素的第一个子元素 E 

- E:last-child 

选择父元素的最后一个子元素 E

- E:nth-child(n)

匹配父元素的第 n 个 子元素 E如果 该子元素不是 E，则选择器无效

- E:nth-last-child(n)

匹配元素的倒数第 n 个子元素 E，假设子元素不是 E,则选取器无效

上面的这几个 怎么用都是先看后面 比如找到 第几个孩子 然后再去匹配标签 如果 匹配的到样式生效，如果匹配不到样式就不生效

===================================================================

下面的这个是先看前面的标签名称，然后找对应的标签 如果匹配的的到就生效，匹配不到就不生效

- E:nth-of-type(n)

匹配同类型中第 n 个 同级兄弟元素 E 

该选择器只是总能命中父元素的 第 n 个 为 E 的子元素，不论第 n 个元素是否为 E 

# 占位符选择器 

通过 E::placeholder 可以修改占位符的样式 

# 属性选择器

- 通过属性来选择标签 

```css
a[href]{
    color:red
}
div[class]{
    color:pink
}
```

- 通过完整的属性，来选择标签

```css
[href="abc.html"] {
    font-size:50px
    color:yellow
}

[type="text"] {
    font-size:30px
    border:1px solid #ccc
}

```

- 通过属性后面的值以某些字符开头来选择标签

```css
[href^="a"] {
    font-size: 30px;
    color:orange
}
```

- 通过属性后面的值以某些字符结尾来选择标签

```css
[href$='l']{
    font-size:100px;
    color:orange
}

```

- 通过属性后的值包含某些字符来选择标签

```css
[href*="b"] {
    color:red;
    font-size:100px
}

```

从上面的例子可以看出 复习的作用不小啊 复习的过程中还可以学到正则的形式

- * 包含
- $ 以 什么 结尾
- ^ 以 什么 开头

所以在以后的学习道路上，不要眼高手低 安安静静的写 你的代码，成败不论，将军尽管攻伐。

