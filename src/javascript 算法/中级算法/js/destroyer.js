// 1.使用 call(), filter(), indexOf() 等方法
function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments)
	var newArr = args.shift()
	return newArr.filter(function(val) {
		return args.indexOf(val) === -1
	})
}

// 2.ES6
/* function destroyer(arr, ...args) {
	return arr.concat().filter(v => args.indexOf(v) === -1)
} */

destroyer([1, 2, 3, 1, 2, 3], 2, 3)