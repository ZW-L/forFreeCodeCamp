function getIndexToIns(arr, num) {
	var newStr = arr.concat().sort(function(a, b) {
		return a > b
	})
	for(var i = 0; i < newStr.length; i++) {
		if(num <= newStr[i]) {
			return i
    }
  }
  
	return newStr.length
}

getIndexToIns([40, 60], 50)