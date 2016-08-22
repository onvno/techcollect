# Vue学习

[概述](http://vuejs.org.cn/guide/overview.html)

* Vue.js 自身不是一个全能框架——它只聚焦于视图层。在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。

* Vue.js 的核心是一个响应的数据绑定系统，它让数据与 DOM 保持同步非常简单。在普通 HTML 模板中使用特殊的语法将 DOM “绑定”到底层数据。一旦创建了绑定，DOM 将与数据保持同步。每当修改了数据，DOM 便相应地更新。这样我们应用中的逻辑就几乎都是直接修改数据了，不必与 DOM 更新搅在一起。这让我们的代码更容易撰写、理解与维护。

  ```html
  示例
  ```



API

* v-if： `v-if` 特性被称为**指令**。指令带有前缀 `v-`，以指示它们是 Vue.js 提供的特殊特性。

  > Vue.js 也提供一个强大的过渡效果系统，可以在 Vue 插入/删除元素时自动应用过渡效果。

* `v-for` 指令用于显示数组元素，`v-bind`指令用于绑定 HTML 特性。我们将在后面详细讨论全部的数据绑定语法。



[Vue实例](http://vuejs.org.cn/guide/instance.html#u5B9E_u4F8B_u751F_u547D_u5468_u671F)

*  所有的 Vue.js 组件其实都是被扩展的 Vue 实例。

*  每个 Vue 实例都会**代理**其 `data` 对象里所有的属性

*  实例**生命周期钩子**:`created`,`compiled`,`ready`,`destroyed`.一些用户可能会问 Vue.js 是否有“控制器”的概念？答案是，没有。组件的自定义逻辑可以分割在这些钩子中。

    ```
    图示
    ```




[数据绑定语法](http://vuejs.org.cn/guide/syntax.html)

* 文本：使用 “Mustache” 语法（双大括号），

  ```
  {{msg}}

  // 只处理单次插值，今后的数据变化就不会再引起插值更新
  {{* msg}}
  ```

* 文本不编译:三个大括号

  ```
  <div>{{{ raw_html }}}</div>
  ```

* html特性

  ```

  ```

* JavaScript 表达式：一个限制是每个绑定只能包含**单个表达式**，因此下面的语句是**无效**的：

  ```
  <!-- 这是一个语句，不是一个表达式： -->
  {{ var a = 1 }}

  <!-- 流程控制也不可以，可改用三元表达式 -->
  {{ if (ok) { return message } }}
  ```

* 指令

  `v-bind` 指令用于响应地更新 HTML 特性

  `v-on` 指令，它用于监听 DOM 事件

  修饰符


[计算属性](http://vuejs.org.cn/guide/computed.html)

[Class与Style绑定](http://vuejs.org.cn/guide/class-and-style.html)

[条件渲染](http://vuejs.org.cn/guide/conditional.html)



* 列表渲染：没有都理解，认为作者在做优化，实战中会有用到
* ​



[方法与事件监听器](http://vuejs.org.cn/guide/events.html)

* 用 `v-on` 指令监听 DOM 事件
* ​