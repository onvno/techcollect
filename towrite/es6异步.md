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