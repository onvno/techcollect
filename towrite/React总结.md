# React总结

项目中在使用react进行组件开发，遂进行一些收集，待闲下心整理。

#### 前端直接跑React

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      // ** Our code goes here! **
    </script>
  </body>
</html>
```


#### JSX

JSX 的基本语法规则：遇到 HTML 标签（以 `<` 开头），就用 HTML 规则解析；遇到代码块（以 `{` 开头），就用 JavaScript 规则解析.

* render 标签

  ```react
  var myDivElement = <div className="foo" />;
  ReactDOM.render(myDivElement, document.getElementById('example'));
  ```

* render Component

  ```react
  var MyComponent = React.createClass({/*...*/});
  var myElement = <MyComponent someProperty={true} />;
  ReactDOM.render(myElement, document.getElementById('example'));
  ```

* React.createElement

  ```react
  var child1 = React.createElement('li', null, 'First Text Content');
  var child2 = React.createElement('li', null, 'Second Text Content');
  var child3 = React.createElement('li', null, 'Third Text Content');
  var root = React.createElement('ul', { className: 'my-list' }, child1, child2, child3);
  ReactDOM.render(
    root,
    document.getElementById('ax')
  )
  ```

* React.DOM标签工厂方法：

  ```react
  var roots = React.DOM.ul(
      {className:'my-list'},
      React.DOM.li(null,'First Text Content2'),
      React.DOM.li(null,'Second Text Content2')
  );
  ReactDOM.render(
    roots,
    document.getElementById('fac')
  )
  ```

* React.createFactory工厂方法：

  ```react
  var factory = React.createFactory("li");
  var chi1 = factory(null,'First Text Content');
  var chi2 = factory(null,'Second Text Content');
  var rootss  = React.createElement('ul',{className:'my-list'},chi1,chi2);
  ReactDOM.render(
          rootss,
          document.getElementById('content')
  );
  ```

  ​

**[React 工厂方法实例介绍](http://www.onmpw.com/tm/xwzj/web_101.html)**





### Model/Dialog组件相关

* [**react-examples**](https://github.com/tryolabs/react-examples)实用modal及其他例子，已做参考实用


* [react-portal](https://github.com/tajo/react-portal/blob/master/lib/portal.js)，及[实例](https://miksu.cz/react-portal/)
* [react-modal](https://github.com/reactjs/react-modal)官方model框
* [How to create a React Modal(which is append to `<body>`) with transitions?](http://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions)
* [Modal window in React from scratch](https://peteris.rocks/blog/modal-window-in-react-from-scratch/)
* [ReactJs Modal Using Javascript and CSS](http://stackoverflow.com/questions/26787198/reactjs-modal-using-javascript-and-css)
* [Rendering React components to the document body](http://jamesknelson.com/rendering-react-components-to-the-document-body/)
* [[How to append to dom in React?](http://stackoverflow.com/questions/30721836/how-to-append-to-dom-in-react)]测试可用
* ​



#### 属性

组件属性可通过以下赋值

```
<ClaaNameA name = “Tom” />
<ClaaNameA name = {Tom} />
<ClaaNameA name = {“Tom”} />
<ClaaNameA name = {[1,2,3]} />//数组
<ClaaNameA name = {FunctionNAme} /> //定义一个函数

# 以下方式多重赋值方便
var props = {
	one :”123”,
	two :321
}
<ClassNameB {…props} />
```



**参考链接**

* [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html):阮一峰，入门实战必读

