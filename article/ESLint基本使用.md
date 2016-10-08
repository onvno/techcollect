# ESLint基本使用

### 概述

eslint用于团队写作中统一代码风格。可以与编辑器或者构建工具集成

通过配置文件进行检测，可通过以下三种途径(实际还可选用YAML,Javascript)，[具体这里](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)：

1. 创建`.eslintrc`文件

   ```json
   // demo
   {
     "env": {
       "browser": true,
     },
     "globals": {
       "angular": true,
     },
     "rules": {
       "camelcase": 2,
       "curly": 2,
       "brace-style": [2, "1tbs"],
       "quotes": [2, "single"],
       "semi": [2, "always"],
       "space-in-brackets": [2, "never"],
       "space-infix-ops": 2,
     }
   }
   ```

2. 在`package.json`文件中配置

   ```json
   {
     "name": "mypackage",
     "version": "0.0.1",
     "eslintConfig": {
       "env": {
         "browser": true,
         "node": true
       }
     }
   }
   ```

3. 直接在`js`文件中进行注释配置

   ```javascript
   /* eslint-disable */
   var obj = { key: 'value', }; // I don't care about IE8  
   /* eslint-enable */
   ```

### 基本使用方法

* 安装

  ```
  npm install eslint -g
  npm install eslint --save
  ```

* 初始化:可通过引导，选择自定义 或 google,airbnb,standard第三方配置包

  ```
  eslint --init
  ```



### ESlint常用配置

* extend引用第三方

  ```json
  {
      "extends": "airbnb",
      "installedESLint": true,
      "plugins": [
          "react"
      ],
      "env": {
          "jquery": true //避免使用jquery报错
      },
      "rules": {
          "indent": ["error", 4]
      }
  }
  ```

  使用`"extends": "eslint:recommended"`,默认选中eslint官方推荐的配置，见[官方勾选项](http://eslint.org/docs/rules/)

* plugins:插件名以`eslint-plugin-`开头，配置时可缺省

  ```json
  {
      "plugins": [
          "plugin1",
          "eslint-plugin-plugin2"
      ]
  }
  ```

* rules:基本规则

  ```
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  ```

  基本规则使用及option选项可通过以下形式

  ```json
  {
      "rules": {
          "eqeqeq": "off",
          "curly": "error",
          "quotes": ["error", "double"]
      }
  }
  ```

  插件规则

  ```json
  {
      "plugins": [
          "plugin1"
      ],
      "rules": {
          "eqeqeq": "off",
          "curly": "error",
          "quotes": ["error", "double"],
          "plugin1/rule1": "error"
      }
  }
  ```

* env环境：

  ```json
  // 常用：
  // browser - browser global variables.
  // node - Node.js global variables and Node.js scoping.
  // jquery - jQuery global variables.
  {
      "env": {
          "browser": true,
          "node": true
      }
  }
  ```

* globals:制定全局变量，避免报错

  ```
   globals:
     var1: true
     var2: false
     document: true
     window: true
  ```

* 手动选择配置文件

  ```
  eslint -c myconfig.json myfiletotest.js
  ```

  ​

### 集成

* gulp集成，安装`gulp-eslint`

  ```
  var gulp = require('gulp');  
  var eslint = require('gulp-eslint');

  gulp.task('lint', function() {  
    return gulp.src('client/app/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format());
  });
  ```

* [atom集成](https://segmentfault.com/a/1190000005984309)

  > 首先，在atom中安装linter插件和linter-eslint插件。安装完成之后，linter-eslint的缺省设置有2个地方需要修改：
  >
  > 1. 把`Disable when no ESLint config is found`的对钩去掉。这个选项的意思是说：如果你的javascript项目文件夹中没有.eslintrc这样的配置文件的话，那么ESLint就不起作用。在这里，我们要设置为全局lint，不需要在每个javascript文件夹中包含.eslintrc文件，所以要把它去掉，否则由于我们的项目文件夹中没有.eslintrc文件，ESLint会不起作用。
  > 2. 把`Use global ESLint installation`的对钩勾上。因为我们使用的是全局的ESLint安装包。

* [sublime集成](http://blog.csdn.net/SYYling/article/details/52424454)

  ```
  * 利用package-control安装SublimeLinter和SublimeLinter-contrib-eslint（只能用package-control的方式，这两个package并未在github上开源，github上的sublime-eslint未找到正确的使用姿势）
  * 然后全局安装eslint(npm install -g eslint),一定要全局安装
  ```



*官方文档*

* [Configuring ESLint](http://eslint.org/docs/user-guide/configuring):配置说明
* [Rules](http://eslint.org/docs/rules/):规则，及默认规则
* [中文文档](https://github.com/Jocs/ESLint_docs/blob/master/Configration/ESLint_configration.md)

*基本入门*

* [ESLint 使用入门](http://www.tuicool.com/articles/7JZZJzn):基本使用介绍

* [atom使用全局配置ESLint](https://segmentfault.com/a/1190000005984309)

* [ESLint配置参数介绍](https://segmentfault.com/a/1190000004468428)

  ​