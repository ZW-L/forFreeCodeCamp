function confirmEnding(str, target) {
	var newStr = str.substring(str.length - target.length)
	return newStr === target
}

confirmEnding('Bastian', 'n')