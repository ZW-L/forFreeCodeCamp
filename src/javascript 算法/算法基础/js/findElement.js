// 1.使用循环
function findElement(arr, func) {
	var index = 0
	while(index < arr.length) {
		if(func(arr[index])) {
			return arr[index]
    }
		index ++
  }
  
	return undefined
}

// 2.使用 find
/* function findElement(arr, func) {
	var ret = arr.find(func)
	return ret === -1 ? undefined : ret
} */

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0 })