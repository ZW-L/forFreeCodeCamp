// 1.使用 arguments 参数和 reduce()
function uniteUnique(arr1, arr2, arr3) {
  var temp
	var newArr = Array.prototype.slice.call(arguments)
	return newArr.reduce(function(accu, curr) {
		temp = curr.filter(function(val) {
			return accu.indexOf(val) === -1	// temp 存储 curr 独立于 accu 的元素
		})
		return accu.concat(temp)
	}, [])
}

// 2.ES6
/* function uniteUnique(...args) {
  return args.reduce((accu, curr) => [...new Set(accu.concat(curr))], [])
} */

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])