// 一个正则(严格模式：没有连续的空格和'-')，推荐，测试了很多情况，应该是没有错误的
function telephoneCheck(str) {
  var regex = /(?!-.+$)^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?(\d{3}[-\s]\d{4}|\d{7})$/;
  return regex.test(str.trim());   //没有指名开头结尾能不能有空格，所以我添加了一个trim()
}

telephoneCheck("555-555-5555");

// 较易理解的方式(可以有连续的空格或'-'，因为题目没有指名能布恩那个有连续的空格和'-')
function telephoneCheck(str) {
  var newStr = str.replace(/\s+|-(?!1)/g, '');
  var regex = /^1?(\d{10}|\(\d{3}\)\d{7})$/;
  return regex.test(newStr);
}

telephoneCheck("555-555-5555");