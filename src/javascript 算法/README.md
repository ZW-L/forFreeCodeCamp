## 目录

**算法基础：**
+ [将摄氏温度转换成华氏温度](#convert-to-f)
+ [翻转字符串](#reverse-string)
+ [数字的阶乘](#factorialize)
+ [查找字符串中最长的单词](#find-longest-word-length)
+ [返回数组中最大的数字](#largest-of-four)
+ [检查字符串的结尾](#confirm-ending)
+ [重复字符串](#repeat-string-num-times)
+ [截断字符串](#truncate-string)
+ [发现者与看护者](#find-element)
+ [真假测试](#boo-who)
+ [单词的首字母大写](#title-case)
+ [slice 和 splice](#franken-splice)
+ [去除数组中的假值](#bouncer)
+ [我身在何处](#get-index-to-ins)
+ [集合之间的关系](#mutation)
+ [猴子吃香蕉](#chunk-array-in-groups)

**中级算法：**
+ [范围内的数字求和](#sum-all)
+ [区分两个数组](#diff-array)
+ [瞄准和消灭](#destroyer)
+ [罗密欧与朱丽叶](#what-is-in-a-name)
+ [短线连接格式](#spinal-case)
+ [儿童黑话](#translate-pig-latin)
+ [搜索和替换](#my-replace)
+ [DNA 配对](#pair-element)
+ [丢失的字母](#fear-not-letter)
+ [集合排序](#unite-unique)
+ [转换 HTML 实体](#convert-html)
+ [求斐波那契数组中的奇数之和](#sum-fibs)
+ [对所有素数求和](#sum-primes)
+ [最小公倍数](#smallest-commons)
+ [放弃](#drop-elements)
+ [扁平化](#steamroller)
+ [二进制转化](#binary-agent)
+ [真假值判断](#truth-check)
+ [可选参数](#add-together)
+ [构造一个 Person 类](#person)
+ [绘制碎片图](#orbital-period)

**项目及更多：**
+ [回文检查器](#palindrome)
+ [罗马数字转换器](#convert-to-roman)
+ [凯撒密码](#rot13)
+ [电话号码验证器](#telephone-check)
+ [收银机](#check-cash-register)
+ [更新仓库库存](#update-inventory)
+ [没有连续重复的字符串个数](#perm-alone)
+ [找到你的另一半](#pairwise)

## 算法基础

### <a id="convert-to-f">将摄氏温度转换成华氏温度</a>

**要求：** [将摄氏温度转换成华氏温度](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit/)

**提示：** 
+ 直接按照公式 `华氏度 = 摄氏度 × 9/5 + 32` 计算
```js
function convertToF(celsius) {
  return celsius * 9 / 5 + 32
}

convertToF(30)
```
<a href="#">返回目录</a>


### <a id="reverse-string">翻转字符串</a>

**要求**：[翻转字符串](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string/)

**提示**：
+ 先用 `split()` 把字符串转化成数组
+ 再用 `reverse()` 翻转数组顺序
+ 最后用 `join()` 把数组转化成字符串
```javascript
function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString('hello')
```
<a href="#">返回目录</a>
***


### <a id="factorialize">数字的阶乘</a>

**要求**：[数字的阶乘](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/)

**提示**：
+ 使用一个循环，循环退出条件为 `num > 1`
+ 也可以使用一个递归，但是要注意递归退出的条件

```javascript
// 1.使用循环
function factorialize(num) {
  var ret = 1
  while(num > 1) {
    ret *= num
    num--
  }

  return ret
}

// 2.使用递归
function factorialize(num) {
  if (num === 0 || num === 1) return 1
  return num * factorialize(num - 1)
}

factorialize(5)
```
<a href="#">返回目录</a>
***


### <a id="find-longest-word-length"></a>

**要求：** [查找字符串中最长的单词](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string/)

**提示：**
+ 将字符串转化为一个包含所有单词的数组，再通过循环找出最长的单词长度
+ 也可以使用 `max()`, `apply()`, `map()` 实现

```javascript
// 1.使用循环
function findLongestWordLength(str) {
	var arr = str.split(' ')
	var ret = 0
  arr.forEach(function(v) {
    if (v.length > ret) {
      ret = v.length
    }
  })

	return ret
}

// 2.使用 max(), apply(), map()
function findLongestWordLength(str) {
	return Math.max.apply(null, str.split(' ').map(function(v) { return v.length }))
}

// 3.ES6
function findLongestWordLength(str) {
	return Math.max(null, ...str.split(' ').map(v => v.length))
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'))
```
<a href="#">返回目录</a>
***


### <a id="largest-of-four">返回数组中最大的数字</a>

**要求：** [返回数组中最大的数字](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/)

**提示：**
+ 可以使用嵌套的 for 循环实现，但是时间复杂度较高
+ 也可以使用 `reduce()`, `max()`, `apply()` 实现
```javascript
// 1.利用嵌套for循环
function largestOfFour(arr) {
	var newArr = []
	for(var i = 0; i < arr.length; i++) {
		var temp = -Infinity
		for(var j = 0; j < arr[i].length; j++) {
			if(arr[i][j] > temp) {
				temp = arr[i][j]
			}
		}
		newArr.push(temp)
  }
  
	return newArr
}

// 2.使用 reduce(), max(), apply()
function largestOfFour(arr) {
	return arr.reduce(function(accu, curr) {
    return accu.concat(Math.max.apply(null, curr))
  }, []) 
}

// 3.ES6
function largestOfFour(arr) {
	return arr.reduce((accu, curr) => accu.concat(Math.max(...curr)), []) 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
```


<a href="#">返回目录</a>
***

### <a id="confirm-ending">检查字符串的结尾</a>

**要求：** [检查字符串的结尾]()

**提示：** 
+ 使用 `substring()` 方法；`substr()` 方法也可以实现，但是该方法不是标准的方法，未来有可能废除

```javascript
function confirmEnding(str, target) {
	var newStr = str.substring(str.length - target.length)
	return newStr === target
}

confirmEnding('Bastian', 'n')
```
<a href="#">返回目录</a>
***


### <a id="repeat-string-num-times">重复字符串</a>

**要求:** [重复字符串](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string/)

**提示：** 
+ 使用循环控制字符串拼接

```javascript
// 1.使用循环
function repeatStringNumTimes(str, num) {
	if(num <= 0)
		return ''
	var newStr = ''
	while(num > 0) {
		newStr += str
    num --
  }
  
	return newStr
}

// 2.ES6
function repeatStringNumTimes(str, num) {
  if (num < 0) return ''
  return new Array(num).fill(str).join('')
}

repeatStringNumTimes('abc', 3)
```
<a href="#">返回目录</a>
***


### <a id="truncate-string">截断字符串</a>

**要求：** [截断字符串](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string/)

**提示：** 
+ 使用 `slice()` 即可

```javascript
function truncateString(str, num) {
	return str.length <= num ? str : str.slice(0, num) + '...'
}

truncateString('A-tisket a-tasket A green and yellow basket', 11)
```
<a href="#">返回目录</a>
***


### <a id="find-element">发现者与看护者</a>

**要求：** [发现者与看护者](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers/)

**提示：**
+ 使用循环，对每一个数组元素执行测试函数

```javascript
// 1.使用循环
function findElement(arr, func) {
	var index = 0
	while(index < arr.length) {
		if(func(arr[index])) {
			return arr[index]
    }
		index ++
  }
  
	return undefined
}

// 2.使用 find
function findElement(arr, func) {
	var ret = arr.find(func)
	return ret === -1 ? undefined : ret
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0 })
```
<a href="#">返回目录</a>
***


### <a id="boo-who">真假测试</a>

**要求：** [真假测试](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who/)

**提示：**
+ 使用全等(`===`)操作符，因为它会先比较变量的数据类型是否相同

```javascript
function booWho(bool) {
	return bool === true || bool === false;
}

booWho(null);
```
***
<a href="#">返回目录</a>


### <a id="title-case">单词的首字母大写</a>

**要求：** [单词的首字母大写](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence/)

**提示：**：
+ 先利用 split() 分割为一个字符串数组，再使用循环或者 map() 对每一项进行操作，使用 replace() 替换首字母
+ 也可以使用正则表达式去匹配需要替换的内容，再进一步替换首字母
```javascript
// 1.使用 map() 或 for 循环
function titleCase(str) {
  return str.toLowerCase().split(' ')
    .map(function(v) { return v.replace(v[0], v[0].toUpperCase()) })
    .join(' ')
}

// 2.使用正则
function titleCase(str) {
  return str.replace(/([^\s]+)/g, function(m) {
    return m.toLowerCase().replace(/\w/, function(s) {
      return s.toUpperCase()
    })
  })
}

// 3.ES6
function titleCase(str) {
  return str.replace(/([^\s]+)/g, m => m.toLowerCase().replace(/\w/, s => s.toUpperCase()))
}

titleCase('I\'m a little tea pot')
```
<a href="#">返回目录</a>
***

### <a id="franken-splice">slice 和 splice</a>

**要求：** [slice 和 splice](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice/)

**说明：**
```js
// 1.使用一个循环
function frankenSplice(arr1, arr2, n) {
  var ret = arr2.slice(0)
  for (var i = 0; i < arr1.length; i++) {
    ret.splice(n, 0, arr1[i])
    n++
  }

  return ret
}

// 2.使用 apply
function frankenSplice(arr1, arr2, n) {
  var params = [n, 0].concat(arr1)
  var ret = arr2.slice(0)
  Array.prototype.splice.apply(ret, params)

  return ret
}

// 3.ES6
function frankenSplice(arr1, arr2, n) {
  var ret = arr2.slice(0)
  ret.splice(n, 0, ...arr1)

  return ret
}

frankenSplice([1, 2, 3], [4, 5, 6], 1)
```
<a href="#">返回目录</a>


### <a id="bouncer">去除数组中的假值</a>

**要求：** [去除数组中的假值](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer/)

**提示：**
+ 使用 `filter()` 过滤元素
+ 使用 `Boolean` 构造函数可以将假值(`''`, `undefined`, `false`, `0`, `NaN`, `null`)转化为 `false`

```javascript
// 1.使用 filter() 和 Boolean 构造函数
function bouncer(arr) {
	return arr.filter(function(v) {
		return Boolean(v)
	})
}

// 2.ES6
function bouncer(arr) {
	return arr.filter(v => Boolean(v))
}

bouncer([7, 'ate', '', false, 9])
```
<a href="#">返回目录</a>
***


### <a id="get-index-to-ins">我身在何处</a>

**要求：** [我身在何处](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/)

**提示：** 
+ 排序后使用循环遍历即可
```javascript
function getIndexToIns(arr, num) {
	var newStr = arr.concat().sort(function(a, b) {
		return a > b
	})
	for(var i = 0; i < newStr.length; i++) {
		if(num <= newStr[i]) {
			return i
    }
  }
  
	return newStr.length
}

getIndexToIns([40, 60], 50)
```
<a href="#">返回目录</a>
***


### <a id="mutation">集合之间的关系</a>

**要求：** [集合之间的关系](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/)

**提示：**
+ 直接使用循环遍历，使用 `indexOf()` 判断即可
```javascript
function mutation(arr) {
	var checkStr = arr[0].toLowerCase()
	var testStr = arr[1].toLowerCase()
	for(var i = 0; i < testStr.length; i++) {
		if(checkStr.indexOf(testStr[i]) === -1) {
			return false
    }
	}
	return true
}

mutation(['hello', 'hey'])
```
<a href="#">返回目录</a>
***


### <a id="chunk-array-in-groups">猴子吃香蕉</a>

**要求：** [猴子吃香蕉](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/)

**提示：**
+ 使用循环遍历，使用 `slice()` 选择数组元素
```javascript
// 1.使用循环遍历，slice() 选择数组元素
function chunkArrayInGroups(arr, size) {
	var ret = []
	var i = 0
	while(i < arr.length) {
		ret.push(arr.slice(i, i + size))
		i += size
  }
  
	return ret
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
```
<a href="#">返回目录</a>
***



## 中级算法

### <a id="sum-all">范围内的数字求和</a>

**要求：** [范围内的数字求和](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/)

**提示：** 
+ 先判断从哪个数开始，再使用一个循环求和即可

```javascript
function sumAll(arr) {
  arr.sort(function(a, b) {
    return a > b;
  });
  var sum = 0;
  for(var i = arr[0]; i <= arr[1]; i++) 
  { 
        sum += i;
  }
  return sum;
}

sumAll([1, 4]);
```
<a href="#">返回目录</a>
***


### <a id="diff-array">区分两个数组</a>

**要求：** [区分两个数组](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays/)
**提示：**
+ 实际上是求两个集合的差集，先找出集合 A 中有但集合 B 中无的元素，再找出集合 B 中有但集合 A 中无的元素，最后合并即可
+ 使用 filter() 过滤元素，使用 indexOf() 判断是否包含某元素

```javascript
// 1.使用 filter() 和 indexOf()
function diffArray(arr1, arr2) {
	var l1 = arr1.filter(function(val) {
		return arr2.indexOf(val) === -1
	})
	var l2 = arr2.filter(function(val) {
		return arr1.indexOf(val) === -1
  })
  
	return l1.concat(l2)
}

// 2.ES6
function diffArray(arr1, arr2) {
  const l1 = arr1.filter(v => arr2.indexOf(v) === -1)
  const l2 = arr2.filter(v => arr1.indexOf(v) === -1)
	return l1.concat(l2)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
```
<a href="#">返回目录</a>
***


### <a id="destroyer">瞄准和消灭</a>

**要求：** [瞄准和消灭](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/)

**提示：** 
+ 可以使用 call() 并结合 arguments 参数提取第一个数组和其他的不定参数
+ 也可以使用 ES6 的剩余参数直接提取除第一个数组外的参数

```javascript
// 1.使用 call(), filter(), indexOf() 等方法
function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments)
	var newArr = args.shift()
	return newArr.filter(function(val) {
		return args.indexOf(val) === -1
	})
}

// 2.ES6
function destroyer(arr, ...args) {
	return arr.concat().filter(v => args.indexOf(v) === -1)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
```
<a href="#">返回目录</a>
***

### <a id="what-is-in-a-name">罗密欧与朱丽叶</a>

**要求：** [罗密欧与朱丽叶](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou/)

**提示：** 
+ 外层 `filter()` 过滤第一个数组的元素，内层的 `filter()` 通过过滤第二个数组的键返回一个布尔值，作为外层 `filter()` 的返回值
+ 使用 `keys()` 获取对象的所有键名的数组，使用 `hasOwnProperty()` 判断对象是否包含指定属性

```javascript
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
function whatIsInAName(collection, source) {
	const testKey = Object.keys(source)
	return collection.filter(obj => testKey.filter(item => {
    return obj.hasOwnProperty(item) && obj[item] === source[item]
  }).length  === testKey.length)
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
```
<a href="#">返回目录</a>
***


### <a id="spinal-case">短线连接格式</a>

**要求：** [短线连接格式](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case/)

**提示：** 
+ 可以使用多个正则匹配和 replace() 替换解决不同的情境
+ 也可以使用单个正则配合 split() 切割为数组，再用 join() 组合为字符串

```javascript
// 1.多步正则匹配并 replace()
function spinalCase(str) {
  return str.trim() // 去除两端空白
    .replace(/[\s_]/g, '-') // 替换空白符和 '_' 为 '-'
    .replace(/(?!^)(?=[A-Z])/g, '-') // 在非开头的的大写字母前面的位置添加 '-'
    .replace(/-+/g, '-') // 将两个连续或以上的 '-' 替换成一个 '-'
    .toLowerCase() // 转换为小写
}

// 2.单个正则匹配指定位置，通过 split() 分割为数组，最后通过 join() 组合为字符串
function spinalCase(str) {
  return str.trim()
    .split(/(?=[A-Z])|\s+|_|-/g)
    .join('-')
    .toLowerCase()
}

spinalCase('This Is Spinal Tap')
```
<a href="#">返回目录</a>
***


### <a id="translate-pig-latin">儿童黑话</a>

**要求：** [儿童黑话](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin/)

**提示：** 
+ 对三种情况进行处理，用 `findIndex()` 找出字符串中第一个元音字母的下标

```javascript
// 对三种情况进行处理，findIndex() 能找出字符串中第一个元音字母的下标
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if(vowels.indexOf(str[0]) !== -1) { // 第一个字母是元音
    return str.concat('way')
  }

  var index = str.split('').findIndex(function(v) {
    return vowels.indexOf(v) !== -1
  })
  // index 为 -1 时，直接在结尾添加 'ay'，否则将非元音拼接到结尾后再添加 'ay'
  return index === -1 ? str.concat('ay') : str.slice(index).concat(str.slice(0, index), 'ay')
}

translatePigLatin("consonant")
```
<a href="#">返回目录</a>
***


### <a id="my-replace">搜索和替换</a>

**要求：** [搜索和替换](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace/)

**提示：** 
+ 替换前判断所替换的字符串是否是大写开头，再用 `replace()` 进行替换即可 

```javascript
function myReplace(str, before, after) {
  var flag = before[0] === before[0].toUpperCase()
  after = flag ? after.replace(after[0], after[0].toUpperCase()) : after
  return str.replace(before, after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
```
<a href="#">返回目录</a>
***


### <a id="pair-element">DNA 配对</a>

**要求：** [DNA 配对](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/)

**提示：** 
+ 使用 `forEach()` 或 `map()`，再在内部使用 `switch` 作分支判断即可

```javascript
function pairElement(str) {
	return str.split('').map(function(val) {
		switch (val) {
			case 'A':
				return ['A', 'T']
			case 'T':
				return ['T', 'A']
			case 'C':
				return ['C', 'G']
			case 'G':
				return ['G', 'C']
		}
	})
}

pairElement("GCG")
```
<a href="#">返回目录</a>
***


### <a id="fear-not-letter">丢失的字母</a>

**要求：** [丢失的字母](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters/)

**提示：** 
+ 结合 charCodeAt()，fromCharCode()，通过一个循环即可

```javascript
function fearNotLetter(str) {
	if(str.length === 1)
		return undefined
	var min = str.charCodeAt(0)
	var max = str.charCodeAt(str.length - 1)
  var ret = []
  var temp
	while(min <= max) {
    temp = String.fromCharCode(min)
    if (str.indexOf(temp) === -1) {
      ret.push(temp)
    }
		min ++
	}
	
	return ret.length === 0 ? undefined : ret.join('')
}

fearNotLetter("abce")
```
<a href="#">返回目录</a>
***


### <a id="unite-unique">集合排序</a>

**要求：** [集合排序](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/)

**提示：** 
+ 使用 `arguments` 参数和 `reduce()`
+ 也可以使用 `ES6` 的 `Set`

```javascript
// 1.使用 arguments 参数和 reduce()
function uniteUnique(arr1, arr2, arr3) {
  var temp
	var newArr = Array.prototype.slice.call(arguments)
	return newArr.reduce(function(accu, curr) {
		temp = curr.filter(function(val) {
			return accu.indexOf(val) === -1	// temp 存储 curr 独立于 accu 的元素
		})
		return accu.concat(temp)
	}, [])
}

// 2.ES6
function uniteUnique(...args) {
  return args.reduce((accu, curr) => [...new Set(accu.concat(curr))], [])
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
```
<a href="#">返回目录</a>
***

### <a id="convert-html">转换 HTML 实体</a>

**要求：** [转换 HTML 实体](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities/)

**提示：**
+ 直接使用 `replace()` 配置正则替换即可

```javascript
function convertHTML(str) {
	var escapeChars = {
		'&': 'amp',
		'>': 'gt',
		'<': 'lt',
		'"': 'quot',
		'\'': 'apos'
  }
  
	return str.replace(/[<>"'&]/g, function(match) {
		return '&' + escapeChars[match] + ';'
	})
}

convertHTML("Dolce & Gabbana")
```
<a href="#">返回目录</a>
***

### <a id="sum-fibs">求斐波那契数组中的奇数之和</a>

**要求：** [求斐波那契数组中的奇数之和](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/)

**说明：** 
+ 先做边界处理，再用一个循环递增 sum，直至超出范围
+ 可以使用 `i % 2 === 1` 或 `i & 1 === 1` 判断一个数是否是奇数
```js
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
```
<a href="#">返回目录</a>
***


### <a id="sum-primes">对所有素数求和</a>

**要求：** [对所有素数求和](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/)

**提示：**
+ 先创建一个函数用于判断素数，它内部的循环优化为判断次数仅为 `Math.sqrt(n)`
+ 再在主函数中使用一个循环累加即可

```javascript
// 判断一个数是否是素数
function isPrime(n) {
	if (n < 2 || parseInt(n) !== n) return false
	if (n === 2 || n === 3) return true
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false
		if (i + 1 > Math.sqrt(n)) return true
	}
}

function sumPrimes(num) {
	var sum = 0
	var start = 2
	while(start <= num) {
		if (isPrime(start)) {
			sum += start
		}
		start++
  }
  
	return sum
}

sumPrimes(10)
```
<a href="#">返回目录</a>
***


### <a id="smallest-commons">最小公倍数</a>

**要求：** [最小公倍数](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/)

**提示：**
+ `a,b 的最小公倍数 = (a*b)/a,b 的最大公约数`，只需要求得最大公约数即可
+ 使用辗转相除法递归求取最大公约数

```javascript
// 递归求最大公约数
function gcd(a, b) {
	var max = Math.max(a, b)
	var min = Math.min(a, b)
	if (max % min === 0) return min
  
	return gcd(min, max % min) // 尾递归优化
}

function smallestCommons(arr) {
	var newArr = []
	var i = Math.min(arr[0], arr[1])
	var j = Math.max(arr[0], arr[1])
	while(i <= j) {
		newArr.push(i)
		i++
  }

	return newArr.reduce(function(accu, curr) {
		return accu * curr / gcd(accu, curr)
	})
}

smallestCommons([1,5])
```
<a href="#">返回目录</a>
***


### <a id="drop-elements">放弃</a>

**要求：** [放弃](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/)

**提示：** 
+ 使用一个循环找出返回 `true` 的下标即可
+ 也可以使用 `findIndex()` 方法

```javascript
// 1.使用一个循环
function dropElements(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		if(i === arr.length - 1) return []
		if(func(arr[i])) return arr.slice(i)
	}
}

// 2.使用 findIndex()
function dropElements(arr, func) {
  var index = arr.findIndex(func)
  return index === -1 ? [] : arr.slice(index)
}

dropElements([1, 2, 3], function(n) { return n < 3 })
```
<a href="#">返回目录</a>
***


### <a id="steamrollArray">扁平化</a>

**要求：** [扁平化](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/)
**提示：**
+ 可以使用递归，结合 `reduce()`, `isArray()`, `concat()`
+ 也可以使用循环，循环退出条件为 `isArray()` 返回 `false`
+ 也可以使用 `ES6` 的扩展运算符(`...`)精简语法

```javascript
// 1.使用递归，结合 reduce(), isArray(), concat()
function steamrollArray(arr) {
  return arr.reduce(function(accu, curr) {
    return Array.isArray(curr) ? accu.concat(steamrollArray(curr)) : accu.concat(curr)
  }, [])
}

// 2.使用一个循环
function steamrollArray(arr) {
  var ret = arr.concat()
  var index = ret.findIndex(v => Array.isArray(v))
  while (index !== -1) {
    ret = ret.slice(0, index).concat(ret[index]).concat(ret.slice(index + 1))
    index = ret.findIndex(v => Array.isArray(v))
  }

  return ret
}

// 3.ES6 的扩展运算符
function steamrollArray(arr) {
  let ret = arr.concat()
  let index = ret.findIndex(v => Array.isArray(v))
  while (index !== -1) {
    ret.splice(index, 1, ...ret[index])
    index = ret.findIndex(v => Array.isArray(v))
  }

  return ret
}

steamrollArray([1, [2], [3, [[4]]]])
```
<a href="#">返回目录</a>
***


### <a id="binary-agent">二进制转化</a>

**要求：** [二进制转化](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents)

**提示：**
+ 先提取二进制数值使用 `parseInt()` 转换为十进制字符编码
+ 再使用 `fromCharCode()` 转换为字符

```javascript
function binaryAgent(str) {
	var newStr = str.replace(/\s/g, '')
	return newStr.replace(/\d{8}/g, function(match) {
		return String.fromCharCode(parseInt(match, 2))
	})
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
```
<a href="#">返回目录</a>
***


### <a id="truth-check">真假值判断</a>

**要求：** [真假值判断](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true)

**提示：**
+ 用 `for` 循环遍历并判断即可
+ 也可以使用 `every()`

```javascript
// 1.用 for 循环实现
function truthCheck(collection, pre) {
	for(var i = 0; i < collection.length; i++) {
		if(!collection[i].hasOwnProperty(pre)) return false
		if(!collection[i][pre]) return false
  }
  
	return true
}

// 2.实际上就是 every() 方法 
function truthCheck(collection, pre) {
	return collection.every(function(val) {
    if(!val.hasOwnProperty(pre)) return false
    return Boolean(val[pre])
	})
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex")
```
<a href="#">返回目录</a>
***


### <a id="add-together">可选参数</a>

**要求：** [可选参数](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional/)

**提示：** 
+ 当任一参数不符合时返回 undefined
+ 当两个参数均符合时返回结果
+ 当先传入一个合法参数时返回一个函数，该函数是一个闭包，它还会返回一个结果(实际上就是柯里化))

```javascript
function addTogether() {
	var args = Array.prototype.slice.call(arguments)
  if(args.length === 2 && (typeof args[0] !== 'number' || typeof args[1] !== 'number')) {
    return undefined
  }

	if(args.length === 1) {
		return (typeof args[0] !== 'number') ? undefined : function(num) {
			return (typeof num === 'number') ? args[0] + num : undefined
    }
  }

  return args[0] + args[1]
}

addTogether(2, 3)
```
<a href="#">返回目录</a>
***


### <a id="person">构造一个 Person 类</a>

**要求：** [构造一个 Person 类](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/)

**提示：** 
+ 直接按照面向对象的方式构建即可

```javascript
var Person = function(firstAndLast) {
  var _firstName
  var _lastName
  function init(fullName) {
    var arr = fullName.split(' ')
    _firstName = arr[0]
    _lastName = arr[1]
  }
  init(firstAndLast)

  this.getFirstName = function() {
    return _firstName
  }
  this.getLastName = function() {
    return _lastName
  }
  this.getFullName = function() {
    return _firstName + ' ' + _lastName
  }
  this.setFirstName = function(firstName) {
    _firstName = firstName
  }
  this.setLastName = function(lastName) {
    _lastName = lastName
  }
  this.setFullName = function(fullName) {
    init(fullName)
  }
}

var bob = new Person('Bob Ross')
bob.getFullName()
```
<a href="#">返回目录</a>
***


### <a id="orbital-period">绘制碎片图</a>

**要求：** [绘制碎片图](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris/)

**提示：** 
+ 地球半径是 `6367.4447km`, 地球的 `GM` 值是 `398600.4418`, 圆周率为 `Math.PI`
+ 直接计算后，为对象添加 `orbitalPeriod` 并删除 `avgAlt` 属性即可

```javascript
function orbitalPeriod(arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447
  return arr.map(function(v) {
    v.orbitalPeriod = Math.round(2*Math.PI*(earthRadius+v.avgAlt)*Math.sqrt((earthRadius+v.avgAlt)/GM))
    delete v.avgAlt
    return v
  })
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])
```
<a href="#">返回目录</a>
***




## 项目及更多

### <a id="palindrome">回文检查器</a>

要求：[回文检查器](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/)

提示：
+ 先用正则剔除不合法字符，再判断字符串相等即可

```js
function palindrome(str) {
  var str1 = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  var str2 = str1.split('').reverse().join('')
  
  return str1 === str2 
}

palindrome("eye")
```
<a href="#">返回目录</a>
***

### <a id="convert-to-roman">罗马数字转换器</a>

要求：[罗马数字转换器](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/)

提示：
+ 先使用一个循环生成一段未处理的罗马数字字符串
+ 再将不合法的串(`VIIII`, `LXXXX`, `DCCCC`, `IIII`, `XXXX`, `CCCC`)替换为合法的串(`IX`, `XC`, `CM`, `IV`, `XM`, `CD`)

```js
function convertToRoman(num) {
  var str = ''
  while(num > 0) {
    if(num - 1000 >= 0) {
      str += 'M'
      num -= 1000
    } else if (num - 500 >= 0) {
      str += 'D'
      num -= 500
    } else if (num - 100 >= 0) {
      str += 'C'
      num -= 100
    } else if (num - 50 >= 0) {
      str += 'L'
      num -= 50
    } else if(num - 10 >= 0) {
      str += 'X'
      num -= 10
    } else if(num - 5 >= 0) {
      str += 'V'
      num -= 5
    } else if(num - 1 >= 0) {
      str += 'I'
      num -= 1
    }
  }

  return str.replace(/VI{4}|LX{4}|DC{4}|I{4}|X{4}|C{4}/g, function(match) {
    switch(match) {
      case 'VIIII':
        return "IX"
      case 'LXXXX':
        return "XC"
      case 'DCCCC':
        return "CM"
      case 'IIII':
        return "IV"
      case 'XXXX':
        return "XL"
      case 'CCCC':
        return "CD"  
    }
  })
}

convertToRoman(44)
```
<a href="#">返回目录</a>
***

### <a id="rot13">凯撒密码</a>

要求：[凯撒密码](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher/)

提示：
+ 使用 charCodeAt() 和 fromCharCode() 方法
+ 直接将各字母码值与 `M` 比较，确定返回 `+13` 或 `-13` 的字符

```js
function rot13(str) { 
	var temp = 'M'.charCodeAt(0)

	return str.replace(/[A-Z]/g, function(match) {
		return match.charCodeAt(0) <= temp ? String.fromCharCode(match.charCodeAt(0) + 13) : String.fromCharCode(match.charCodeAt(0) - 13)
	})
}

rot13("SERR PBQR PNZC")
```
<a href="#">返回目录</a>
***

### <a id="telephone-check">电话号码验证器</a>

要求：[电话号码验证器](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/)

提示：
+ 方法1先替换合法的字符后测试结果，第二步的正则测试只剩下两种合法结果，较为容易
+ 方法2直接使用一个正则判断，难度较高；除了 `1` 开头可有可无后，合法的结果有无非就是几种情况下的组合(使用正则分组和分支很容易解决)，需要注意的是：
	+ 合法的空格或 `-` 是可有可无的
	+ 区号只能包含一对合法的括号或没有

```js
// 1.先替换合法的字符后测试结果
function telephoneCheck(str) {
  var newStr = str.replace(/\s+|-(?!1)/g, '') // 当 '-' 在开头时不会替换，因为这是不合法的
  var regex = /^1?(\d{10}|\(\d{3}\)\d{7})$/ // 开头的 1 是可选的，后面可以是连续的 10 个数字或 (123)4567890 的形式
  return regex.test(newStr)
}

// 2.直接使用一个正则判断，难度较高
function telephoneCheck(str) {
  var regex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?(\d{3}[-\s]\d{4}|\d{7})$/
  return regex.test(str.trim()) // 先取消首尾空格再测试
}

telephoneCheck("555-555-5555")
```
<a href="#">返回目录</a>
***

### <a id="check-cash-register">收银机</a>

要求：[收银机](https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/)

提示：
+ 

```js

```
<a href="#">返回目录</a>
***

### <a id="update-inventory">更新仓库库存</a>

**要求：** [更新仓库库存](https://freecodecamp.cn/challenges/inventory-update)

**提示：**
+ 先对边界进行处理，可以使用 sort() 可以对结果排序
+ 提取其中一个数组的键名，再遍历另一个数组，依次添加项或更新项即可

```js
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
```
<a href="#">返回目录</a>
***

### <a id="perm-alone">没有连续重复的字符串个数</a>

**要求：** [没有连续重复的字符串个数](https://freecodecamp.cn/challenges/no-repeats-please)

**提示：**
+ 使用递归求取全排列，再筛选全排列结果中合法的序列长度，但是时间和空间复杂度都很高！

```js
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
```
<a href="#">返回目录</a>
***

### <a id="pairwise">找到你的另一半</a>

**要求：** [找到你的另一半](https://freecodecamp.cn/challenges/pairwise)

**提示：**
+ 使用 `reduce()` 累加，内部判断后，将原值赋值为 NaN，禁止再次进行计算

```js
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
```
<a href="#">返回目录</a>
***