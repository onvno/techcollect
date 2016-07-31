## Javascript 原型链继承



## 简单实现继承

```javascript
var a = {
      x: 10,
    calculate: function (z) {
        return this.x + this.y + z
      }
};

var b = {
  y: 20,
  __proto__: a
};

var c = {
  y: 30,
  __proto__: a
};

// call the inherited method
b.calculate(30); // 60
c.calculate(40); // 80
```

他们之间的继承关系：



 ![1430231-2383de904a0ef8df](/Users/liwei/Desktop/1430231-2383de904a0ef8df.png)

以上图，观察`a`可得到：

> 如果没有明确为一个对象指定原型，那么它将会使用__proto__的默认值－Object.prototype。Object.prototype对象自身也有一个__proto__属性，这是原型链的终点并且值为null。

以上代码，ES5实现方法：

```
var b = Object.create(a, {y: {value: 20}});
var c = Object.create(a, {y: {value: 30}});
```

如浏览器不支持，可用以下Polyfill

```javascript
if(!Object.create){
    Object.create = function(obj){
        function F(){};
        F.prototype = obj;
        return new F();
    }
}
```



## 构造函数继承

```javascript
// a constructor function
function Foo(y) {
  // which may create objects
  // by specified pattern: they have after
  // creation own "y" property
  this.y = y;
}

// also "Foo.prototype" stores reference
// to the prototype of newly created objects,
// so we may use it to define shared/inherited
// properties or methods, so the same as in
// previous example we have:

// inherited property "x"
Foo.prototype.x = 10;

// and inherited method "calculate"
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};

// now create our "b" and "c"
// objects using "pattern" Foo
var b = new Foo(20);
var c = new Foo(30);

// call the inherited method
b.calculate(30); // 60
c.calculate(40); // 80

// let's show that we reference
// properties we expect

console.log(

  b.__proto__ === Foo.prototype, // true
  c.__proto__ === Foo.prototype, // true

  // also "Foo.prototype" automatically creates
  // a special property "constructor", which is a
  // reference to the constructor function itself;
  // instances "b" and "c" may found it via
  // delegation and use to check their constructor

  b.constructor === Foo, // true
  c.constructor === Foo, // true
  Foo.prototype.constructor === Foo // true

  b.calculate === b.__proto__.calculate, // true
  b.__proto__.calculate === Foo.prototype.calculate // true

);
```

 ![1430231-f99c16e43ea4bff1](/Users/liwei/Desktop/1430231-f99c16e43ea4bff1.png)

**注意：可得出`constructor`都指向构造函数本身,创建的实例b,c都指向构造函数的'prototype对象'**



## ES6的继承-类-`extends`

```javascript
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`My name is ${this.name},i'm ${this.age} years old`)
    }
  	toString(){
  		...
	}
}

class Student extends Person{
    constructor(name,age,cla){
        super(name,age); // 调用父类的constructor(name, age)
        this.class = cla;
    }
    study(){
        console.log(`I'm study in class ${this.class}`)
    }
    toString() {
    	return this.class + ' ' + super.toString(); // 调用父类的toString()
  	}
}

```

> `constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。
>
> [ES6入门](http://es6.ruanyifeng.com/#docs/class)

注意，子类中必须在`constructor`先使用`super()`来调用父类。

原因是子类通过`super`获取父类`this`实现继承，否则后边的`this.class`因获取不到`this`会报错。

> `super`这个关键字，有两种用法，含义不同。
>
> （1）作为函数调用时（即`super(...args)`），`super`代表父类的构造函数。
>
> （2）作为对象调用时（即`super.prop`或`super.method()`），`super`代表父类。注意，此时`super`即可以引用父类实例的属性和方法，也可以引用父类的静态方法。

ES6可实现原生构造函数的继承。



参考链接

- [JS原型链](http://www.jianshu.com/p/d18c55fac766?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [ES5和ES6中的继承](http://keenwon.com/1524.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [JavaScript 中的类和继承](https://www.kisnows.com/2016/03/21/class%20and%20inherit%20in%20JavaScript/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [阮一峰ES6入门－Class](http://es6.ruanyifeng.com/#docs/class)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)