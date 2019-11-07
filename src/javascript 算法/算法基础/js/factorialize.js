// 1.使用循环
/* function factorialize(num) {
  var ret = 1
  while(num > 1) {
    ret *= num
    num--
  }

  return ret
} */

// 2.使用递归
function factorialize(num) {
  if (num === 0 || num === 1) return 1
  return num * factorialize(num - 1)
}

factorialize(5)