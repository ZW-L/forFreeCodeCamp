// 1.使用递归求取全排列，再筛选全排列结果中合法的序列长度；时间和空间复杂度都很高！
function getList(str) {
  // 递归结束条件
  if(str.length === 2) {
    return [str[0] + str[1], str[1] + str[0]]
  }
  // 递归拆分
  var char = str[str.length - 1]
  var prev = getList(str.slice(0, -1)) // prev 为上一轮递归返回的结果数组
  // 递归计算，将 char 插入到 prev 数组中每个字符串的空隙
  var ret = []
  for(var i = 0; i < prev.length; i++){
    for(var j = 0; j < prev[i].length + 1; j++) {
      ret.push(prev[i].substring(0, j) + char + prev[i].substring(j))
    }
  }

  return ret
}

function permAlone(str) {
	return getList(str).filter(function(val) {
		return !/(\w)\1/.test(val)
	}).length
}

permAlone('aab')