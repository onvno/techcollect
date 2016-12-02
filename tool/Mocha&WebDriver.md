### Mocha&Webdriver总结

#### mocha钩子

```
describe('hooks', function() {

  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

  // test cases
});
```

**注意：**before执行的条件是一定更有测试任务，否则`before`不执行



#### 更改页面元素value值

[Set value of input instead of sendKeys() - selenium webdriver nodejs](http://stackoverflow.com/questions/25583641/set-value-of-input-instead-of-sendkeys-selenium-webdriver-nodejs)

```
var webdriver = require('selenium-webdriver');
driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.executeScript("document.querySelector('#j_username').setAttribute('value', 'liwdm')");
```



#### 判断页面元素是否存在

[Check if element exists - selenium / javascript / node-js](http://stackoverflow.com/questions/20148857/check-if-element-exists-selenium-javascript-node-js)

```
driver.findElement(webdriver.By.id('test')).then(function(webElement) {
        console.log('Element exists');
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('Element not found');
        } else {
            webdriver.promise.rejected(err);
        }
    });
```



#### Mocha命令行自定义参数

使用node 的环境变量`ENV `

```
env KEY=YOUR_KEY mocha test/*.js # assumes some sort of Unix-type OS.

# in files
var key = process.env.KEY;
```





*参考链接*

* [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
* [selenium-webdriver官网文档](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
* [Selenium Webdriver 基于浏览器的自动化测试](http://sanwen8.cn/p/2c2pwEg.html)
* [**geckodriver**](https://github.com/mozilla/geckodriver):火狐驱动

*其他*

* [Using JavascriptExecutor to sendKeys plus click on web element](http://stackoverflow.com/questions/31632923/using-javascriptexecutor-to-sendkeys-plus-click-on-web-element)
* [[How do you use credentials saved by the browser in auto login script in python 2.7?](http://stackoverflow.com/questions/35641019/how-do-you-use-credentials-saved-by-the-browser-in-auto-login-script-in-python-2)保留登陆信息
* [[Starting chromedriver with saved passwords enabled](http://stackoverflow.com/questions/37544593/starting-chromedriver-with-saved-passwords-enabled)]保留登陆信息java