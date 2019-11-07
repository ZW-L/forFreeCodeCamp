function truncateString(str, num) {
	return str.length <= num ? str : str.slice(0, num) + '...'
}

truncateString('A-tisket a-tasket A green and yellow basket', 11)