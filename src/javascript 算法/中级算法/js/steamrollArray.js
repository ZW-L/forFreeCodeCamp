// 1.使用递归，结合 reduce(), isArray(), concat()
function steamrollArray(arr) {
  return arr.reduce(function(accu, curr) {
    return Array.isArray(curr) ? accu.concat(steamrollArray(curr)) : accu.concat(curr)
  }, [])
}

// 2.使用一个循环
/* function steamrollArray(arr) {
  var ret = arr.concat()
  var index = ret.findIndex(v => Array.isArray(v))
  while (index !== -1) {
    ret = ret.slice(0, index).concat(ret[index]).concat(ret.slice(index + 1))
    index = ret.findIndex(v => Array.isArray(v))
  }

  return ret
} */

// 3.ES6 的扩展运算符
/* function steamrollArray(arr) {
  let ret = arr.concat()
  let index = ret.findIndex(v => Array.isArray(v))
  while (index !== -1) {
    ret.splice(index, 1, ...ret[index])
    index = ret.findIndex(v => Array.isArray(v))
  }

  return ret
} */

steamrollArray([1, [2], [3, [[4]]]])