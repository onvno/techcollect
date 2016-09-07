## vue实时数据绑定的实现

* [作者源码](https://github.com/vuejs/vue/blob/871ed9126639c9128c18bb2f19e6afd42c0c5ad9/explorations%2Fgetset.html)
* [他人分析兼双向绑定实例](http://www.cnblogs.com/dh-dh/p/5606596.html)

摘录作者源码及实例在code仓库

* [vue/start](https://github.com/onvno/codesnippets/tree/master/vue/start)中的bind




数据绑定

* [Data-binding Revolutions with Object.observe()](http://www.html5rocks.com/en/tutorials/es7/observe/)
* [Object.observe()带来的数据绑定变革](http://www.tuicool.com/articles/ZVVNBv)以上为同一文章
* [How to Implement DOM Data Binding in JavaScript](http://stackoverflow.com/questions/16483560/how-to-implement-dom-data-binding-in-javascript):Stackoverflow
* [Native JavaScript Data-Binding](http://www.sellarafaeli.com/blog/native_javascript_data_binding)多实例
* [Data binding code in 9 JavaScript frameworks](http://engineering.paiza.io/entry/2015/03/12/145216)]9种框架数据绑定方法
* [JavaScript 实现简单的双向数据绑定](http://www.oschina.net/translate/easy-two-way-data-binding-in-javascript?cmp)中英双文
* [自己动手写Knockoutjs - 实现基本的双向数据绑定](https://github.com/iuap-design/blog/issues/30):公司内部博客



注意事项：

* **Object.observe()**已经在Chrome52彻底移除：
>  Deprecated in Chrome 49 and flagged off in Chrome 50 and entirely removed in Chrome 52