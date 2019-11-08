function pairwise(arr, arg) {
  if(arr.length === 0 || arr.length === 1) return 0
  var newArr = arr.concat()
  return newArr.reduce(function(accu, curr, index) {
    var next = newArr.findIndex(function(v) { return v === arg - curr })
    if (next !== -1 && next !== index) {
      newArr[index] = NaN
      newArr[next] = NaN
      return accu +index + next
    }
    return accu
  }, 0)
}

pairwise([1,4,2,3,0,5], 7)