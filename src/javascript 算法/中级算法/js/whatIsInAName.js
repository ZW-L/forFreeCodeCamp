// 1.嵌套的 filter() 实现
function whatIsInAName(collection, source) {
	var testKey = Object.keys(source)
	var temp
	return collection.filter(function(obj) {
		temp = testKey.filter(function(item) {
			return obj.hasOwnProperty(item) && obj[item] === source[item]
		})
		return temp.length === testKey.length
	})
}

// 2.ES6
/* function whatIsInAName(collection, source) {
	const testKey = Object.keys(source)
	return collection.filter(obj => testKey.filter(item => {
    return obj.hasOwnProperty(item) && obj[item] === source[item]
  }).length  === testKey.length)
} */

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
