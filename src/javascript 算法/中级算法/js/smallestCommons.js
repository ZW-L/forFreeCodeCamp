// 递归求最大公约数
function gcd(a, b) {
	var max = Math.max(a, b)
	var min = Math.min(a, b)
	if (max % min === 0) return min
  
	return gcd(min, max % min) // 尾递归优化
}

function smallestCommons(arr) {
	var newArr = []
	var i = Math.min(arr[0], arr[1])
	var j = Math.max(arr[0], arr[1])
	while(i <= j) {
		newArr.push(i)
		i++
  }

	return newArr.reduce(function(accu, curr) {
		return accu * curr / gcd(accu, curr)
	})
}

smallestCommons([1,5])