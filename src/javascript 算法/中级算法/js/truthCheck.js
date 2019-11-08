// 1.用 for 循环实现
function truthCheck(collection, pre) {
	for(var i = 0; i < collection.length; i++) {
		if(!collection[i].hasOwnProperty(pre)) return false
		if(!collection[i][pre]) return false
  }
  
	return true
}

// 2.实际上就是 every() 方法 
/* function truthCheck(collection, pre) {
	return collection.every(function(val) {
    if(!val.hasOwnProperty(pre)) return false
    return Boolean(val[pre])
	})
} */

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex")