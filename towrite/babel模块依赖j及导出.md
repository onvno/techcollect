## npm包-babel模块依赖es6解决方法



* 问题一object.defineproperty(exports __esmodule value true ) browser not support
  解决办法：

```
npm install babel-plugin-add-module-exports --save-dev

//使用

```
* 以上实质是用来解决node使用的问题，未解决浏览器实际问题，原因可能是输出的amd/cmd/commonjs仍需要编译
  见以下链接：[gulp babel, exports is not defined](http://stackoverflow.com/questions/33294705/gulp-babel-exports-is-not-defined)

##完整实现es6到最终可用的es5
* bebel -> 转为commonjs/ amd标准
* webpack ->编译，转为浏览器识别

## 完整示例
* **[gulp-es6-webpack-example](https://github.com/tiagorg/gulp-es6-webpack-example)**
* [30分钟手把手教你学webpack实战](http://www.cnblogs.com/tugenhua0707/p/4793265.html)
* **[webpack-es6-demo](https://github.com/rauschma/webpack-es6-demo)**

## 最终解决
根据验证，实际为`webpack`执行`babel`时，`exclude`了`node-modules`模块内的文件依赖。
**项目情况**：通过`npm`发包获得最新依赖
**问题**：es6的模块嵌套依赖输出错误
**解决办法**：
中间件方法：
1. 先输出一个文件包，用来把es6转为es5
   2.再次获取依赖时，依赖已经是es5不用`babel`了，只要编译目前入口文件即可。

彻底解决办法：
1、webpack配置`babel`中，取消`exclude`：`node-modules`内容，使其可以执行es6编译
2、npm包中的`.babelrc`文件需要`ignore`掉，因为他会影响根目录正常编译，会报错。

** 参考
* [*Object.defineProperty()*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)



## polyfill问题

如上，babel转es5,用到Object.defineProperty,ie8不支持。

可以通过在入口文件顶部，引入

```
import "babel-polyfill";
```

或者在webpack中入口文件出配置：

```
module.exports = {
   entry: ['babel-polyfill', './app/js']
};
```

但是完整引入，会多出200kb,实现完美的es7兼容环境，但是与需求不符。

根据官网提示，babel的polyfill用的是`core-js`.通过npm获得`core-js`，发现可通过简单配置一个webpack获取此部分模块：

```
// 入口文件
// Default -获取所有polyfill
require('core-js');
// Without global namespace pollution 
var core = require('core-js/library');
// Shim only -仅仅获取shim部分
require('core-js/shim'); 
```

参照说明，使用如下

```
require('core-js/es5/index.js');
```

使用gulp-webpack输出,不需要任何loader

```
var gulp = require('gulp');
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
	return gulp.src('./need.js')
		.pipe(webpack({
			module:{
				loaders:[
					// {
					// 	test: /(\.jsx|\.js)$/,
					// 	loader: 'babel',
					// 	exclude: /(node_modules|bower_components)/ 
					// }
				]				
			},
			output:{
				filename:'needer.js',
				libraryTarget:'umd',
				umdNamedDefine: true
			},
			resolve:{
				extensions: ['','.js','.jsx']
			}
		}))
		.pipe(gulp.dest('./'))
});
```

代码地址见

[模块依赖输出配置](https://github.com/onvno/codesnippets/tree/master/module%E4%BE%9D%E8%B5%96%E8%BE%93%E5%87%BA)



参考链接

[babel-How to use the Polyfill.](https://babeljs.io/docs/usage/polyfill/)

[nam-core-js](https://www.npmjs.com/package/core-js)