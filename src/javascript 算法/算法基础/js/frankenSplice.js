// 1.使用一个循环
/* function frankenSplice(arr1, arr2, n) {
  var ret = arr2.slice(0)
  for (var i = 0; i < arr1.length; i++) {
    ret.splice(n, 0, arr1[i])
    n++
  }

  return ret
} */

// 2.使用 apply
function frankenSplice(arr1, arr2, n) {
  var params = [n, 0].concat(arr1)
  var ret = arr2.slice(0)
  Array.prototype.splice.apply(ret, params)

  return ret
}

// 3.ES6
/* function frankenSplice(arr1, arr2, n) {
  var ret = arr2.slice(0)
  ret.splice(n, 0, ...arr1)

  return ret
} */

frankenSplice([1, 2, 3], [4, 5, 6], 1)