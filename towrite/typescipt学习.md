# TypeScript学习

### 中文官网快速上手教程

* [TS快速上手](http://www.tslang.cn/docs/tutorial.html)

#### 安装编译

```shell
npm install -g typescript
tsc greeter.js
```

#### DEMO

```typescript
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

#### Gulp配置

```
npm install -g typescript gulp-cli
npm install --save-dev gulp gulp-typescript
```

创建`tsconfig.json`

```
{
    "files": [
        "src/main.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
```

创建`gulpfile.js`

```
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist"));
});
```

执行

```
gulp
```



#### Watchify + Browserify + babel

[自动化执行](http://www.tslang.cn/docs/handbook/gulp.html)



### 实战相关

* [写API接口](https://www.zhihu.com/question/50910967) ： 示例为微信接口，实现：书写优越感 ＋ 只需关注“程序设计” + 代码重用性大大提高