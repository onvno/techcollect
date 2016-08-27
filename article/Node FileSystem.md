# Node FileSystem

## Node FileSystem

Node为所有API实现了同步`Synchronous`和异步`Asynchronous`，性能上得到了极大的优化。

**同步or异步**

从网站处理并发来讲，异步为此而生。但就前段项目工程化的角度，只是用来实现页面静态化输出，同步的性能要优于异步，毕竟在整体执行时间上有一点小优势，且能跳过不少异步的坑。

```javascript
// vs.js
var fs = require("fs");

// Asynchronous read
fs.readFile('vs.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('vs.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
```

`vs.txt`内容

```
Synchronous + Asynchronous Content
```

执行`node vs`结果

```
192:vs liwei$ node vs
Synchronous read: Synchronous + Asynchronous Content
Program Ended
Asynchronous read: Synchronous + Asynchronous Content
```



本次主要通过一些小实例，展示Node fs一些常用的API.
Node的API接口提供了简单的复制和粘贴功能.



**利用`pipe`管道实现复制**:

```javascript
var fs = require('fs');
var readable = fs.createReadStream('./original.txt');
var writeable = fs.createWriteStream('./copy.txt');
readable.pipe(writeable);
```

Node也提供了批量输出`Bulk file I/O`的API,**下例实现内容存储在缓存中**:

```javascript
var fs = require('fs');
fs.readFile('./copy.txt', function(err, buf) {
	console.log(buf.toString());//输出缓存内容
});
```



**利用`fs.watch`监视文件变化**:

```javascript
var fs = require('fs');
fs.watch('./', function(event,filename) {
	console.log('event is:' + event); // 监视的类型：'rename','change' 
	if(filename) {
		console.log('filename provided:' + filename);
	} else {
		console.log('filename not provided');
	}
})
```

根据官方文档[fs.watch](https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener),目前`watch`不一定适用所有平台：

> The `fs.watch` API is not 100% consistent across platforms, and is unavailable in some situations. The recursive option is only supported on OS X and Windows.

经测试`watch`只能实现`rename`和`change`事件。文件增删时，提示均为`rename`。

监视文件变化的另外一个API为：`fs.watchFile`



**查找文件**

```javascript
var fs = require('fs');
var join = require('path').join;

exports.findSync = function (nameRe, startPath) {
	var results = [];

	function finder(path) {
		var files = fs.readdirSync(path);

		for(var i=0; i<files.length; i++) {
			var fpath = join(path, files[i]);
			var stats = fs.statSync(fpath);

			if(stats.isDirectory()) finder(fpath);
			if(stats.isFile() && nameRe.test(files[i])) results.push(fpath);
		}
	}

	finder(startPath);
	return results;
}
```

在查找资料过程中，可以选择使用一些异步库`sdync `简化代码。

[简单示例地址](https://github.com/onvno/node-module)


参考：

[node-js-in-practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939/ref=sr_1_1?ie=UTF8&qid=1468752014&sr=8-1&keywords=node+js+in+practice)
