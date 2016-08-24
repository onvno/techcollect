'use strict'

/**
 * 示例来源http://mp.weixin.qq.com/s?__biz=MzI5NTE0MzEwMg==&mid=2247483680&idx=1&sn=d4b6bd0b7bce1435030d44bb239409af&scene=23&srcid=0523kjGz2W8P5SEBx7FbfAPi#rd
 */

var myGen = function*() {
	var one = yield 1;
	var two = yield 2;
	var three = yield 3;
	console.log(one, two, three);
}

var gen = myGen();

/**
 * 注意console.log(one, two, three)输出为undefined,undeifined,undefined
 * 原因为yield赋值从右到左，没有给one,two,three附上值
 */
// console.log(gen.next()); //{value:1,done:false}
// console.log(gen.next()); //{value:2,done:false}
// console.log(gen.next()); //{value:3,done:false}
// console.log(gen.next()); //{value:undefined,done:true}


/**
 * 注意，这里console.log(one, two, three)输出为2,3,4
 * 因为第一次gen.next(1)只执行了yield 1,没有赋值操作
 * 从第二次起，先向左赋值 one = 2,然后执行第二个yield，然后再暂停,以此类推。。。
 */
// console.log(gen.next(1));
// console.log(gen.next(2));
// console.log(gen.next(3));
// console.log(gen.next(4));