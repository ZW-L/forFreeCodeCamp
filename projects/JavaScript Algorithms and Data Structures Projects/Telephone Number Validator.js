// 1.先替换合法的字符后测试结果
function telephoneCheck(str) {
  var newStr = str.replace(/\s+|-(?!1)/g, '') // 当 '-' 在开头时不会替换，因为这是不合法的
  var regex = /^1?(\d{10}|\(\d{3}\)\d{7})$/ // 开头的 1 是可选的，后面可以是连续的 10 个数字或 (123)4567890 的形式
  return regex.test(newStr)
}

// 2.直接使用一个正则判断，难度较高
/* function telephoneCheck(str) {
  var regex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?(\d{3}[-\s]\d{4}|\d{7})$/
  return regex.test(str.trim()) // 先取消首尾空格再测试
} */

telephoneCheck("555-555-5555")