// 结合 charCodeAt()，fromCharCode()，通过一个循环即可
function fearNotLetter(str) {
	if(str.length === 1)
		return undefined
	var min = str.charCodeAt(0)
	var max = str.charCodeAt(str.length - 1)
  var ret = []
  var temp
	while(min <= max) {
    temp = String.fromCharCode(min)
    if (str.indexOf(temp) === -1) {
      ret.push(temp)
    }
		min ++
	}
	
	return ret.length === 0 ? undefined : ret.join('')
}

fearNotLetter("abce")