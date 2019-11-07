// 1.使用循环遍历，slice() 选择数组元素
function chunkArrayInGroups(arr, size) {
	var ret = []
	var i = 0
	while(i < arr.length) {
		ret.push(arr.slice(i, i + size))
		i += size
  }
  
	return ret
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)