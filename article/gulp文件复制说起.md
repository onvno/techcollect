# gulp文件复制说起

## gulp文件复制说起

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