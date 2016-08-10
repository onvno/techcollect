webpack

* 问题： 多入口，多出口
   [How to add wildcard mapping in entry of webpack](http://stackoverflow.com/questions/32874025/how-to-add-wildcard-mapping-in-entry-of-webpack)


```
var fs = require('fs'),
    entries = fs.readdirSync('./src/scripts/').filter(function(file) {
        return file.match(/.*\.js$/);
    });
```



* 问题： entry无法直接用

  转成obj对象key,value使用



* bug:多入口互相依赖报错


  [Error: a dependency to an entry point is not allowed](https://github.com/webpack/webpack/issues/300)

* args使用

  https://www.npmjs.com/package/yargs

* 字符串substr,substring,split







以后测试:多入多出

[How to create multiple output paths in Webpack config](http://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config)

[The need for multiple output paths?](https://github.com/webpack/webpack/issues/1189)

## webpack babel执行报错
**问题是会反馈其他文件夹`package.json`文件错误，无稽之谈**

isuue解决办法：https://github.com/facebook/flow/issues/353
