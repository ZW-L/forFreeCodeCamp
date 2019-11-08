function convertHTML(str) {
	var escapeChars = {
		'&': 'amp',
		'>': 'gt',
		'<': 'lt',
		'"': 'quot',
		'\'': 'apos'
  }
  
	return str.replace(/[<>"'&]/g, function(match) {
		return '&' + escapeChars[match] + ';'
	})
}

convertHTML("Dolce & Gabbana")