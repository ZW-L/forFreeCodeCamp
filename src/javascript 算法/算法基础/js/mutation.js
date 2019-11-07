function mutation(arr) {
	var checkStr = arr[0].toLowerCase()
	var testStr = arr[1].toLowerCase()
	for(var i = 0; i < testStr.length; i++) {
		if(checkStr.indexOf(testStr[i]) === -1) {
			return false
		}
	}
	return true
}

mutation(['hello', 'hey'])