function rot13(str) { 
	return str.replace(/[A-Z]/g, function(match, index) {
		var temp = 'M'.charCodeAt(0);
		return str.charCodeAt(index) <= temp?String.fromCharCode(str.charCodeAt(index) + 13) 
		:String.fromCharCode(str.charCodeAt(index) - 13);
	});
}

rot13("SERR PBQR PNZC")
