# Node debug

SO上有个问答的集合：[How do I debug Node.js applications?](http://stackoverflow.com/questions/1911015/how-do-i-debug-node-js-applications)。可以参考下里边的分门别类方法。

node-debug方法：

1. [node debugger官方文档](http://nodejs.org/api/debugger.html): 官网的`debugger`,命令行执行操作。

   ```
   # debugger 在app.js中打断点

   $ node debug app.js
   ```

2. [node inspector](https://www.npmjs.com/package/node-inspector):简单可视化，实际操作中发现node新版本不支持

   ```
   $ node-debug app.js

   ```

3. [devtool](https://www.npmjs.com/package/devtool):测试可用

   ```
   # runs a Node.js app in DevTools 
   devtool src/app.js
   devtool app.js --watch
   devtool app.js --break
   ```

4. web storm-IDE调试，测试使用方便

5. node-webkit：未测试

6. vs IDE调试

7. ​



参考链接

* [node-debug三方法](http://i5ting.github.io/node-debug-tutorial/)
* [Debugging Node.js in Chrome DevTools](https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools):介绍devtool,干货
* [Comparing Node.js Debug Options](https://spin.atomicobject.com/2015/09/25/debug-node-js/):比较了inspector & webstorm
* [node-js调试](https://segmentfault.com/a/1190000002542114)：node-webkit & vsIDE调试