function updateInventory(arr1, arr2) {
  if(arr1.length === 0 && arr2.length === 0) return []
  if(arr1.length === 0) return arr2.sort(function(a, b) { return a[1] > b[1] })
  if(arr2.length === 0) return arr1.sort(function(a, b) { return a[1] > b[1] })
	
	var ret = arr1.concat()
  var keys = ret.map(function(val) { return val[1] })
  arr2.forEach(function(val) {
    if(keys.indexOf(val[1]) === -1) {
      ret.push(val)
    } else {
      ret[keys.indexOf(val[1])][0] += val[0]
    }
  })

  return ret.sort(function(a, b) { return a[1] > b[1] })
}

// 仓库库存示例
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
]
var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
]

updateInventory(curInv, newInv)