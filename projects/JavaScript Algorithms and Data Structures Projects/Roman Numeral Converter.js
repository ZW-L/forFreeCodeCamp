function convert(num) {
  var newArr = [];
  var newStr;
  while(num > 0) {
      if(num - 1000 >= 0) {
          newArr.push('M');
          num -= 1000;
      } else if (num - 500 >= 0) {
          newArr.push('D');
          num -= 500;
      } else if (num - 100 >= 0) {
          newArr.push('C');
          num -= 100;
      } else if (num - 50 >= 0) {
          newArr.push('L');
          num -= 50;
      } else if(num - 10 >= 0) {
          newArr.push('X');
          num -= 10;
      } else if(num - 5 >= 0) {
          newArr.push('V');
          num -= 5;
      } else if(num - 1 >= 0) {
          newArr.push('I');
          num -= 1;
      }
  }
  newStr = newArr.join('');
  return newStr.replace(/VI{4}|LX{4}|DC{4}|I{4}|X{4}|C{4}/g, function(match) {
      switch(match) {
          case 'VIIII':
              return "IX";
          case 'LXXXX':
              return "XC";
          case 'DCCCC':
              return "CM";
          case 'IIII':
              return "IV";
          case 'XXXX':
              return "XL";
          case 'CCCC':
              return "CD";  
      }
  });
}

convert(36);