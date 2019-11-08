function convertToRoman(num) {
  var str = ''
  while(num > 0) {
    if(num - 1000 >= 0) {
      str += 'M'
      num -= 1000
    } else if (num - 500 >= 0) {
      str += 'D'
      num -= 500
    } else if (num - 100 >= 0) {
      str += 'C'
      num -= 100
    } else if (num - 50 >= 0) {
      str += 'L'
      num -= 50
    } else if(num - 10 >= 0) {
      str += 'X'
      num -= 10
    } else if(num - 5 >= 0) {
      str += 'V'
      num -= 5
    } else if(num - 1 >= 0) {
      str += 'I'
      num -= 1
    }
  }

  return str.replace(/VI{4}|LX{4}|DC{4}|I{4}|X{4}|C{4}/g, function(match) {
    switch(match) {
      case 'VIIII':
        return "IX"
      case 'LXXXX':
        return "XC"
      case 'DCCCC':
        return "CM"
      case 'IIII':
        return "IV"
      case 'XXXX':
        return "XL"
      case 'CCCC':
        return "CD"  
    }
  })
}

convertToRoman(44)