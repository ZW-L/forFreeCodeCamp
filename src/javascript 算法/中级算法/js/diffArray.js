// 1.使用 filter() 和 indexOf()
function diffArray(arr1, arr2) {
	var l1 = arr1.filter(function(val) {
		return arr2.indexOf(val) === -1
	})
	var l2 = arr2.filter(function(val) {
		return arr1.indexOf(val) === -1
  })
  
	return l1.concat(l2)
}

// 2.ES6
/* function diffArray(arr1, arr2) {
  const l1 = arr1.filter(v => arr2.indexOf(v) === -1)
  const l2 = arr2.filter(v => arr1.indexOf(v) === -1)
	return l1.concat(l2)
} */

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])