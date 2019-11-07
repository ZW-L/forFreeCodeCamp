// 1.一个循环
function sumFibs(num) {
  if (num === 1) return 1
  if (num === 2) return 2
  var a = 1
  var b = 1
  var temp = 0
  var sum = a + b
  while (b <= num) {
    temp = b
    b = a + b
    a = temp
    if (b <= num && b & 1) {
      sum += b
    }
  }

  return sum
}

// 2.ES6
function sumFibs(num) {
  if (num === 1) return 1
  if (num === 2) return 2
  let a = 1
  let b = 1
  let sum = a + b
  while (b <= num) {
    [a, b] = [b, a + b]
    if (b <= num && b & 1) {
      sum += b
    }
  }

  return sum
}

sumFibs(4)