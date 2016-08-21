var toString = Object.prototype.toString;

var isType = function(type) {
	return function(obj) {
		return toString.call(obj) == '[object ' + type + ']';
	};
};

var isString = isType('String');
var isFunction = isType('Function');

var ary = 'abc';
console.log(isString(ary));

var obj = new Object();
var fun = new Function();
console.log(isFunction(obj));
console.log(isFunction(fun));