// 提示**：你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。
// 要求**：如果给定的字符串是回文，返回true，反之，返回false。
// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

function palindrome(str) {
  var str1 = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var str2 = str1.split('').reverse().join('');
  if(str1 === str2)
    return true;
  return false; 
}

palindrome("eye");

// 注：本程序只筛选了`数字`和`大小写字母`以外的字符，与题目要求有不符合，但测试也通过了。