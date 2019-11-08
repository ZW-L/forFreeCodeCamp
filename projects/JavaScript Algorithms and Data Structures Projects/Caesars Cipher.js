function rot13(str) { 
	var temp = 'M'.charCodeAt(0)

	return str.replace(/[A-Z]/g, function(match) {
		return match.charCodeAt(0) <= temp ? String.fromCharCode(match.charCodeAt(0) + 13) : String.fromCharCode(match.charCodeAt(0) - 13)
	})
}

rot13("SERR PBQR PNZC")