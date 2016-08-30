# Node-Stream入门示例(草稿)

实现读取文件，之前的`readfile`可实现，如下：

```
var server = http.createServer(function(req, res) {
	fs.readFile(__dirname + '/cont/vue.html', function(err, data) {
		if(err) {
			res.statusCode = 500;
			res.end(String(err));
		} else {
			res.end(data);
		}
	});
});
```
上方法存在以下问题：

>  文件内容都直接缓存在内存中，影响并发速度

优化方法：

```
var server = http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/cont/vue.html');
	stream.pipe(res);
})

server.listen(8000);
console.log('正在打开http://localhost:8000/')
```
使用`stream`实现优化，且代码简洁.

进一步，实现`gzip`
```
var http = require('http');
var fs = require('fs');
var zlib = require('zlib');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-encoding': 'gzip'});
	var stream = fs.createReadStream(__dirname + '/cont/vue.html');
	stream.pipe(zlib.createGzip()).pipe(res);
});

server.listen(8000);
console.log('正在打开http://localhost:8000/')
```

完整代码及其他相关node代码，见https://github.com/onvno/node-module