// 1.使用 map() 或 for 循环
/* function titleCase(str) {
  return str.toLowerCase().split(' ')
    .map(function(v) { return v.replace(v[0], v[0].toUpperCase()) })
    .join(' ')
} */

// 2.使用正则
function titleCase(str) {
  return str.replace(/([^\s]+)/g, function(m) {
    return m.toLowerCase().replace(/\w/, function(s) {
      return s.toUpperCase()
    })
  })
}

// 3.ES6
/* function titleCase(str) {
  return str.replace(/([^\s]+)/g, m => m.toLowerCase().replace(/\w/, s => s.toUpperCase()))
} */

titleCase('I\'m a little tea pot')