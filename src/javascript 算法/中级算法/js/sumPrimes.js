function isPrime(n) {
	if (n < 2 || parseInt(n) !== n) return false
	if (n === 2 || n === 3) return true
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false
		if (i + 1 > Math.sqrt(n)) return true
	}
}

function sumPrimes(num) {
	var sum = 0
	var start = 2
	while(start <= num) {
		if (isPrime(start)) {
			sum += start
		}
		start++
  }
  
	return sum
}

sumPrimes(10)