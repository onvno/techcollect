/**
 * 代码示例菜鸟教程http://www.runoob.com/nodejs/nodejs-process.html
 */

const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
	var workerProcess = child_process.spawn('node', ['support.js', i]);
	workerProcess.stdout.on('data', function(data){
		console.log('stdout:' + data);
	})

	workerProcess.stderr.on('data', function(data){
		console.log('stderr: ' + data);
	})
	console.log(i + '__'+workerProcess.pid);
	workerProcess.on('close', function(code){
		console.log('子进程已退出，退出码 ' + code)
	})

}