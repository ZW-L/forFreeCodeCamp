// 1.使用 filter() 和 Boolean 构造函数
function bouncer(arr) {
	return arr.filter(function(v) {
		return Boolean(v)
	})
}

// 2.ES6
/* function bouncer(arr) {
	return arr.filter(v => Boolean(v))
} */

bouncer([7, 'ate', '', false, 9])