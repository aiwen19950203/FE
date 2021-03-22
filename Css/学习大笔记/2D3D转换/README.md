# 背景
css 可以添加背景图片和颜色 来进行背景图片的设置
|background-color|背景颜色|
|---|---|
|background-image|背景图片地址|
|background-repeat|是否平铺|
|background-position|背景位置|
|background-attachment|背景固定还是滚动|
背景属性的连写
background:背景颜色 背景图片 背景平铺 背景滚动 背景位置
# 背景图片 background-image
- none 无背景图片
- 使用绝对或者相对地址的背景图片
- url 不加引号
属性允许指定一个图片展示在背景中 可以和 background-color 连用。如果图片不重复的话，图片覆盖不到的地方会被背景颜色填充。如果背景图片平铺，则会覆盖背景颜色
# 背景平铺 background-repeat 
- repeat 背景图像在水平和纵向上平铺
- no-repeat 背景图像不平铺
- repeat-x 横向平铺
- repeat-y 纵向平铺

# 背景位置
background-position：length -->数值加 px 
background-position：position --> top center bottom | left center right
**参数**
- 数值
length 如果只有 一个参数 表示的是 距离左边的距离 第二个取得默认的是在 垂直方向上默认是 center 居中的
如果有两个参数 表示的分别是距离左边和距离上边的距离
- 方位
如果我们只写一个方位名词，那么另一个居中对齐，他们是部分顺序的

如果精确单位和方位名词混合使用 必须是 x 轴 在前 y 坐标 在后面  必须是数字在前 方位名词在后面。

# 背景附着

> background-attachment : scroll | fixed 

**参数**

- scroll 背景图像是随着内容滚动
- fixed 背景图像固定

# 背景简写

background：背景颜色 背景图片地址 背景平铺 背景滚动 背景位置

> background:transparent url repeat-y scroll 50% 0





