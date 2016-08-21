'use strict'
/**
 * 示例来源https://segmentfault.com/a/1190000003810652
 * 传统 Ajax 已死，Fetch 永生
 */

/**
 * [xhr description]
 * @type {XMLHttpRequest}
 */
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'book.json');
// xhr.responseType = 'json';

// xhr.onload = function() {
// 	console.log(xhr.response);
// };

// xhr.onerror = function() {
// 	console.log('Oops,error');
// };

// xhr.send();
// 



/**
 * Fetch - es5
 */
// var url = new Request('book.json');
// fetch(url)
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(data) {
// 		console.log(data)
// 	})
// 	.catch(function(e) {
// 		console.log('Oops, error');
// 	})



/**
 * Fetch -es6- 箭头函数
 */
// var url = new Request('book.json');
// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(e => console.log('Oops, error', e))
// 


/**
 * es7 
 */
 try {
 	var url = new Request('book.json');
 	let response = await fetch(url);
 	let data = response.json();
 	console.log(data);
 } catch(e) {
 	console.log('Oops, error', e)
 }




