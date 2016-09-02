## gulp-node脚本执行 & gulp.watch

#### node中执行单一任务

```
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const nodeFun = function() {
	gulp.src('./index.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app'));
}

nodeFun();
```



#### node中执行多任务

需要引入gulpfile.js

```javascript
const gulp = require('gulp');
require('./gulpfile.js');

if(gulp.tasks.ug){
	console.log('has ug task');
	gulp.start('ug');
}
```



#### 关于gulp.watch

gulp.watch监听只在文件变化后执行，不太满足前后端通信需求。需要初始化执行任务，可以使用`gulp.start`代替`gulp run`

```javascript
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('ug', function(){
	return gulp.src('./index.js')
		.pipe(uglify())
		.pipe(gulp.dest('./ug'));
});

gulp.start('ug');

gulp.task('watch', function(){
	gulp.watch('./index.js', ['ug']);
});
```

代码地址：[链接](https://github.com/onvno/codesnippets/tree/master/gulp-watch-node)