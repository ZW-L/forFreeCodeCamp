function palindrome(str) {
  var str1 = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  var str2 = str1.split('').reverse().join('')
  
  return str1 === str2 
}

palindrome("eye")