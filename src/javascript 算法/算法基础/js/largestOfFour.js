// 1.利用嵌套for循环
/* function largestOfFour(arr) {
	var newArr = []
	for(var i = 0; i < arr.length; i++) {
		var temp = -Infinity
		for(var j = 0; j < arr[i].length; j++) {
			if(arr[i][j] > temp) {
				temp = arr[i][j]
			}
		}
		newArr.push(temp)
  }
  
	return newArr
} */

// 2.使用 reduce(), max(), apply()
function largestOfFour(arr) {
	return arr.reduce(function(accu, curr) {
    return accu.concat(Math.max.apply(null, curr))
  }, []) 
}

// 3.ES6
/* function largestOfFour(arr) {
	return arr.reduce((accu, curr) => accu.concat(Math.max(...curr)), []) 
} */

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])