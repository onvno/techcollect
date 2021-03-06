# Gulp配置

## gulp基本介绍

Gulp是基于node.js的构建工具

## gulp安装

```javascript
npm install -g gulp
```



## gulp配置文件

正常使用gulp前，需要先检查下是否已存在`package.json`文件，如未存在，可使用以下命令建立

```javascript
npm init
```

完成以上操作，新建gulp配置文件`gulpfile.js`,以下针对gulp配置进行说明。

gulp可通过一些列插件完成文件的压缩，合并，重命名，图片压缩,base64 等构建功能。一些插件的功能介绍：

## gulp组件功能介绍

```
gulp-imagemin: 压缩图片
gulp-ruby-sass: 支持sass
gulp-minify-css: 压缩css
gulp-jshint: 检查js
gulp-uglify: 压缩js
gulp-concat: 合并文件
gulp-rename: 重命名文件
gulp-htmlmin: 压缩html
gulp-clean: 清空文件夹
```

## gulp插件安装

```
npm install --save-dev gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload
```

使用npm包管理器安装。

## gulp基本api

- Gulp.task(name, fn) 用来定义任务的
- Gulp.run(tasks…) 从3.5开始弃用，将在4.0中删除。[https://github.com/gulpjs/gulp/blob/master/index.js#L16](https://github.com/gulpjs/gulp/blob/master/index.js#L16)
- Gulp.src(glob) 用来读取文件
- Gulp.dest(folder) 用来写入文件
- Gulp.watch(glob, fn) 用来监听文件是否改动过

以如下文件重命名示例说明：

## Demo－文件重命名

```javascript
var gulp = require('gulp'); // 引入gulp
var rename = require('gulp-rename'); //引入插件gulp-rename

// 定义任务
gulp.task('name', function(){
  return gulp.src('./js/index.js') //获取需要执行rename的文件
  	.pipe(rename('main.js')) //执行重命名
  	.pipe(gulp.dest('./dist/js')) //重命名后的文件输出到'./dist/js'文件下
})
```

以上demo简述：

* 引入`gulp`及所需的插件`gulp-rename`
* 定义任务`gulp.task`名为`name`
* 读取需要重命名的js文件`./js/index.js`
* 执行重命名，修改为`main.js`
* 将修改后的`main.js`输出到`./dist/js`目录下。

如上，定义了一个简单的示例，在命令行输入

```
gulp name
```

执行demo示例



## 链式任务执行

实际情况中，经常会遇到，一个任务是基于另外一个或多个任务完成后才能执行。

写法如下

```
gulp.task('default', ['less','watch'], function(){
  // `less`,`watch`任务结束后执行此部分
  do something
});
```

说明，以上`default`任务执行时，gulp会先执行之前定义的`less`,`watch`任务后，才会执行`function(){}`部分，注意`less`和`watch`任务执行**没有前后顺序**。

以下是之前做的一个基本配置，后续会完善gulp更多功能说明

[gulp配置](https://github.com/onvno/gulpconfig/blob/master/gulpfile.js)

未完。