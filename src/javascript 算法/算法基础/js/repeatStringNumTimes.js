// 1.使用循环
function repeatStringNumTimes(str, num) {
	if(num <= 0)
		return ''
	var newStr = ''
	while(num > 0) {
		newStr += str
    num --
  }
  
	return newStr
}

// ES6
/* function repeatStringNumTimes(str, num) {
  if (num < 0) return ''
  return new Array(num).fill(str).join('')
} */

repeatStringNumTimes('abc', 3)