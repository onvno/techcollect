### fetch

* [传统 Ajax 已死，Fetch 永生](https://segmentfault.com/a/1190000003810652)，继续学习补充此篇文中提到的内容

* [A repository of Fetch examples](https://github.com/mdn/fetch-examples),MDN的fetch例子集合

```javascript
'use strict'
/**
* 示例来源https://segmentfault.com/a/1190000003810652
* 传统 Ajax 已死，Fetch 永生
*/

/**
* [xhr description]
* @type {XMLHttpRequest}
*/
var xhr = new XMLHttpRequest();
xhr.open('GET', 'book.json');
xhr.responseType = 'json';

xhr.onload = function() {
console.log(xhr.response);
};

xhr.onerror = function() {
console.log('Oops,error');
};

xhr.send();




/**
* Fetch - es5
*/
var url = new Request('book.json');
fetch(url)
.then(function(response) {
return response.json();
})
.then(function(data) {
console.log(data)
})
.catch(function(e) {
console.log('Oops, error');
})



/**
* Fetch -es6- 箭头函数
*/
var url = new Request('book.json');
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(e => console.log('Oops, error', e))



/**
* es7 -已经通过regenerator编译为es5:xhr-fetch-convert-es5.js
*/
try {
var url = new Request('book.json');
let response = await fetch(url);
let data = response.json();
console.log(data);
} catch(e) {
console.log('Oops, error', e)
}
```









## es6异步

generator

链接：[Generator 函数的含义与用法](http://www.ruanyifeng.com/blog/2015/04/generator.html)

```
function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }
```

```
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```



## co用法，见上链接




*  [深入浅出 Node.js 异步流程控制](http://toutiao.io/j/seih8b)
*  [Promise, generator, async 与 ES6](http://toutiao.io/j/ev06e1)
*  [ES6 Generator 初体验](http://toutiao.io/j/4ds1yh)
*  [传统 Ajax 已死，Fetch 永生](https://segmentfault.com/a/1190000003810652)
*  [A repository of Fetch examples](https://github.com/mdn/fetch-examples)