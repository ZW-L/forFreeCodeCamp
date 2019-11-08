// 1.使用一个循环
function dropElements(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		if(i === arr.length - 1) return []
		if(func(arr[i])) return arr.slice(i)
	}
}

// 2.使用 findIndex()
/* function dropElements(arr, func) {
  var index = arr.findIndex(func)
  return index === -1 ? [] : arr.slice(index)
} */

dropElements([1, 2, 3], function(n) { return n < 3 })