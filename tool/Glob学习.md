# Glob学习

### 项目介绍

* 项目地址：[node-glob](https://github.com/isaacs/node-glob)

* 项目概述：文件匹配

* 项目安装

  ```
  $ npm install --save glob
  ```

* 基本用法

  ```javascript
  var glob = require('glob');
  glob("**/*.js", options, function(err,files){
    console.log(files);
  })
  ```

### 匹配规则

> - `*` Matches 0 or more characters in a single path portion
> - `?` Matches 1 character
> - `[...]` Matches a range of characters, similar to a RegExp range. If the first character of the range is `!` or `^` then it matches any character not in the range.
> - `!(pattern|pattern|pattern)` Matches anything that does not match any of the patterns provided.
> - `?(pattern|pattern|pattern)` Matches zero or one occurrence of the patterns provided.
> - `+(pattern|pattern|pattern)` Matches one or more occurrences of the patterns provided.
> - `*(a|b|c)` Matches zero or more occurrences of the patterns provided
> - `@(pattern|pat*|pat?erN)` Matches exactly one of the patterns provided
> - `**` If a "globstar" is alone in a path portion, then it matches zero or more directories and subdirectories searching for matches. It does not crawl symlinked directories.

### 使用Tips

* 点开头文件

  默认会忽略点开头文件，如`a/*/c`会忽略`a/.b/c`文件，可选择使用`a/.*/c`进行匹配。如需要在默认开启，可在`optional`选项中开启`dot:true`

  ```javascript
  glob('*', {dot: true}, function(error, files){
    console.log(files);
  })
  ```

* 是否可类似gulp使用数组作为筛选文件，测试结构：否

  ```
  // 错误用法:执行报错,需要字符串形式
  // TypeError: glob pattern string required
  glob(['**/*.js','!node_modules/**/*.js'],fn)
  ```

* 开启matchBase,搜索目录下所有符合pattern的文件

  ```
  glob('*.js', {matchBase: true}, function(err,files){
    console.log(files);
  })
  ```

  ​