function myReplace(str, before, after) {
  var flag = before[0] === before[0].toUpperCase()
  after = flag ? after.replace(after[0], after[0].toUpperCase()) : after
  return str.replace(before, after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")