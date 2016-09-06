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



## Gulp多后缀文件路径

[Multiple file extensions within the same directory using Gulp](http://stackoverflow.com/questions/28876469/multiple-file-extensions-within-the-same-directory-using-gulp)

```
return gulp.src('./images/*.jpg', './images/*.png', './images/*.gif')
return gulp.src('./images/*.{png,gif,jpg}')
```

gulp依据[node-glob](https://github.com/isaacs/node-glob)



## Gulp文件复制说起-node

在项目中，实现文件复制，常用的方法是使用`gulp`配置

```javascript
var gulp = require('gulp');
vat path = ['./src/**'];

gulp.task('copy', function() {
  return gulp.src(path)
  	.pipe(gulp.dest('./dist'));
})
```

开发效率来说，gulp是前端的利器，但究其源头，也是通过node来实现的，那就以node复制文件为实例进行说明，代码如下：

```javascript
var fs = require( 'fs' ),
    stat = fs.stat;

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;       
            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );   
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};
// 复制目录
exists( './src', './dist', copy );
```

注意，以上`fs.readdir( src, callback )`、`stat( _src, callback )`是node中的异步回调。而在实际项目中，内容复制后需要进行编译，但以上方法因异步的执行顺序问题，无法进行编译。因此需要将以上两处转为同步执行。

异步写法：

```javascript
fs.readdir( src, function(err, paths){
  // 内容执行;
} );
```

同步阻塞写法：

```javascript
var paths = fs.readdirSync( src );
function(err, paths){
  // 内容执行;
}
```

异步是node的特色，从执行效率上，优先使用异步。