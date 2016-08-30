# Sass拾遗

## 写在前边

上周的工作中，一部分是在和`scss`接触。之前项目中使用`less`更多，`sass`在写过几个页面后因为语法繁琐就没继续。因对`sass`没有充分了解，所以不敢妄自下结论，决定对`sass`文档做一次完整的了解。中文文档竟满篇中英文结合表示一些不满，开始翻着看看`sass`官网了解。了解，然后就明白了：`sass`官网文档，纯翻译来说，[Sass中文文档](http://sass.bootcss.com/)已经尽力了。

本篇是对认华[scss基础语法与在datatable项目中的运用](https://github.com/iuap-design/blog/issues/17)的补充，和自己在整理过程中的一点看法，安装过程略。

## 特征Features

* 完美兼容CSS
* CSS拓展，如引入变量，嵌套，混合等
* 很多[useful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html) 
* 很多先进的特性如[control directives](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions)
* 良好的自定义、格式化输出

## .sass文件 or .scss文件

> sass有两种后缀名文件：一种后缀名为`sass`，不使用大括号和分号；另一种就是我们这里使用的`scss`文件,我们项目中采用`scss`后缀
>
> [scss基础语法与在datatable项目中的运用](https://github.com/iuap-design/blog/issues/17)

两种形式可以通过输入以下命令，很容易随时转换：

```
# Convert Sass to SCSS
$ sass-convert style.sass style.scss

# Convert SCSS to Sass
$ sass-convert style.scss style.sass
```
## 交互界面Interactive Shell

shell中输入`sass -i`可以直接调出交互界面，用于打印输出：

```
$ sass -i
>> "Hello, Sassy World!"
"Hello, Sassy World!"
>> 1px + 1px + 1px
3px
>> #777 + #777
#eeeeee
>> #777 + #888
white
```



## 预处理

书写CSS开始是件简单愉悦的事，随着项目深入，没有程序的逻辑关系，导致维护越来越麻烦。所以`sass`号称就是解决你的烦恼，`css`中没有变量，我们给你。没有嵌套，我们给你。总体来说，就是实现css代码的可复用。

如何编译？

* 基本

  ```
  sass input.scss output.css
  ```

* 实时编译

  ```
  sass --watch app/sass:public/stylesheets
  ```

  注意：如`scss`文件和`css` 在同一目录，执行`watch`没有实时监控编译效果，此部分官方未提到



## 缓存Caching

Sass会将编译过的模板和`partials`存入缓存，加快依赖关系较多的文件再次编译时的时间。

如不希望缓存，可以在执行操作时，将`:cache`设置为`false

## 操作Options

`sass`有四种编译风格：

> * nested：嵌套缩进的css代码，它是默认值。
>
>
> * expanded：没有缩进的、扩展的css代码。
> * compact：简洁格式的css代码。
> * compressed：压缩后的css代码。

执行以下命令，`sass`文件下所有的`scss`文件目录需要执行编译，在`css`文件夹下输出嵌套风格的代码

```
sass --style nested --watch sass/.:css/.
```
## 引入Import

scss使用`@import`引入其他文件,避免了大段大段代码集合在单个文件中。

注意：此部分scss改写了css原本的`import`方法，原因是，css使用`import`或多次HTTP请求，在项目中一般不会用到。

```
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

输出

```
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

注意：`import`如引入的文件是`css`,或者是`url地址`，仍然会按照原生的`css`执行，即文件会做多次`http`请求，所以在项目中，最好统一使用`scss`格式，直接输出完整编译的文件。

## 片段Partials

通过`_partial.scss`方式命名。scss编译时会自动忽略此部分文件，不会直接输出`partial.css`文件。同时也可以通过import `partial`引入，无需加下划线。

## 变量Variables

scss使用`$`符号来定义变量，例子

```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

输出

```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## 嵌套Nesting

嵌套顾名思义，俄罗斯套娃，一层套一层，使用类似`html`层级的写法，解决默认`css`样式堆积的问题，简化了继承的操作，更直观。

但官方也提到：**过犹不及，过度使用，造成代码维护困难**。恩，是的，变通的方法是可以选择给对应的元素增加类，减少嵌套带来的后期维护问题。

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

输出

```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

## 混合Minxins

`Minxins`可解决枯燥的写css3前缀属性带来的繁琐（当然构建工具更方便解决此类问题，此处只是举例说明Minxins用法）

*定义*：`@mixin`

*使用*：`@include`

```
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

输出

```
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

## 继承Extend/Inheritance

类似混合实现的效果，不过继承无需`@mixin`定义，使用`@extend`继承之前定义的类或其他。

吐槽：混合和继承，在`less`中完全可以通过定义一个类函数如`message(){…}`轻松实现，是为`sass`不够友善的地方。

```
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

输出

```
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

## 占位选择%

考虑到项目的推进，很多依赖无需层层嵌套，可以选择使用占位符来解决输出冗余问题：

```
%message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend %message;
  border-color: green;
}

```

输出

```
.success{
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}
```

## 操作符Operators

基本的`+`,`-`,`*`,`/`,`%`

```
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

输出

```
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```

## 数组List

sass中的数组，有两种形式可以任意选择：

```
//使用空格
$list1: 1px 2px 3px 4px;

//使用逗号
$list2: 1px,2px,3px,4px;
```

## 键值对Maps

可以定义`key`和`value`值

```
$map: (key1: value1, key2: value2, key3: value3);
```

## 插入值Interpolation

scss中插入值，需要使用`#{变量}`的形式，示例如下：

```
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

输出：

```
p.foo {
  border-color: blue; }
```

## 函数Function

sass提供的函数用到的比较少，以下给出链接以后查找时方便一些：

[Sass Function](http://sass-lang.com/documentation/Sass/Script/Functions.html)

以上，了解过程中，`sass`开始接触，会有很变扭的感觉，因为包括文档在内，有一部分都在说明ruby环境下如何执行...同时发挥`sass`的能力，需要结合`compass`。关于`compass`，目前粗浅有以下两点了解：

* 再一次拉高`sass`的学习成本
* 最后一次更新是2014年

## 最后

从前端发展角度，目前`compass`有点尴尬处境，个人认为可以采用`PostCss + Sass/Less`配合自动化工具来推动新的项目。

参考：
[Sass官网](http://sass-lang.com/)
[PostCSS 是个什么鬼东西？](https://segmentfault.com/a/1190000003909268)

另外，附一个compass学习地址:
[Sass和Compass必备技能之Compass](http://www.imooc.com/learn/371)