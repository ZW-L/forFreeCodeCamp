// 1.使用循环
/* function findLongestWordLength(str) {
	var arr = str.split(' ')
	var ret = 0
  arr.forEach(function(v) {
    if (v.length > ret) {
      ret = v.length
    }
  })

	return ret
} */

// 2.使用 map() 和 max()
function findLongestWordLength(str) {
	return Math.max.apply(null, str.split(' ').map(function(v) { return v.length }))
}

// 3.ES6
/* function findLongestWordLength(str) {
	return Math.max(null, ...str.split(' ').map(v => v.length))
} */

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'))