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
+ [罗密欧与朱丽叶](#where)
+ [短线连接格式](#spinal-case)
+ [儿童黑话](#translate)
+ [搜索和替换](#my-replace)
+ [DNA 配对](#pair)
+ [丢失的字母](#fear-not-letter)
+ [集合排序](#unite)
+ [转换 HTML 实体](#convert)
+ [求斐波那契数组中的奇数之和](#sum-fibs)
+ [对所有素数求和](#sum-primes)
+ [最小公倍数](#gcd)
+ [放弃](#drop)
+ [扁平化](#steamroller)
+ [二进制转化](#binary-agent)
+ [真假值判断](#every)
+ [可选参数](#add)
+ [构造一个 Person 类](#person)
+ [绘制碎片图](#orbital-period)

**更多：**
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

**提示：** 

**要求：**
+ 我们会传递给你一个包含两个数字的数组
+ 返回这两个数字和它们之间所有数字的和
+ 最小的数字并非总在最前面

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

**提示：**

**要求：** 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

```javascript
function diffArray(arr1, arr2) {
	var newArr1 = arr1.filter(function(val) {
		return arr2.indexOf(val) === -1;
	});
	var newArr2 = arr2.filter(function(val) {
		return arr1.indexOf(val) === -1;
	});
	return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
<a href="#">返回目录</a>
***

### <a id="destroyer">瞄准和消灭</a>

**提示：** 
+ 提取`arguments`数组的值`Array.prototype.slice.call(arguments)`
+ Array.filter();

**要求：** 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
```javascript
function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	var targetArr = args.shift();
	return targetArr.filter(function(val) {
		return args.indexOf(val) === -1 ? true : false;
	});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
<a href="#">返回目录</a>
***

### <a id="where">罗密欧与朱丽叶</a>

**提示：** 

**要求：** 
+ 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
+ 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

```javascript
// 方法1
function where(collection, source) {
	var testKey = Object.keys(source);
	return  collection.filter(function(obj) {	//遍历对象数组
		var n = 0;
		var flag;
		while(n < testKey.length) {
			if(obj.hasOwnProperty(testKey[n])) {
				if(obj[testKey[n]] === source[testKey[n]]) {
					flag = true;
					n++ ;
				} else {
					flag = false;
					return ;
				}
			} else {
				flag = false;
				return ;
			}
		}
		return flag;
	});
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// 方法2
function where(collection, source) {
	var testKey = Object.keys(source);
	var temp;
	return collection.filter(function(obj) {
		temp = testKey.filter(function(item) {
			if(obj.hasOwnProperty(item)) {
				return obj[item] === source[item];
			}
			return false;
		});
		return temp.length === testKey.length;
	});
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```
<a href="#">返回目录</a>
***

### <a id="spinal-case">短线连接格式</a>

**提示：** Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词

**要求：** 将字符串转换为 spinal case 的形式并输出

```javascript
function spinalCase(str) {
	var newStr = str.trim().replace(/[\s_]/g, '-');  //去除两端空白以及替换空白符、'-'
	newStr = newStr.replace(/(?!^)(?=[A-Z])/g, '-');  //在非开头的的大写字母前面的位置添加'-'
	newStr = newStr.replace(/-+/g, '-');  //将两个连续或以上的'-'替换成一个'-'
	return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');
```
<a href="#">返回目录</a>
***

### <a id="translate">儿童黑话</a>

**提示：** 

**要求：** 
+ 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"
+ 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了

```javascript
function translate(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if(vowels.indexOf(str[0]) !== -1)
		return str.concat('way');
	var arr = str.split('');
	var index = 0;
	while(index < arr.length) {
		if(vowels.indexOf(arr[index]) !== -1)
			break;
		index ++;
	}
	return str.slice(index).concat(str.slice(0, index), 'ay');
}

translate("consonant");
```
<a href="#">返回目录</a>
***

### <a id="my-replace">搜索和替换</a>

**提示：** 

**要求：** 
+ 使用给定的参数对句子执行一次查找和替换，然后返回新句子
+ 第一个参数是将要对其执行查找和替换的句子
+ 第二个参数是将被替换掉的单词（替换前的单词）
+ 第三个参数用于替换第二个参数（替换后的单词）

```javascript
function myReplace(str, before, after) {
	var flag = before[0] === before[0].toUpperCase();
	after = flag ? after.replace(after[0], after[0].toUpperCase()) : after;
	return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
<a href="#">返回目录</a>
***

### <a id="pair">DNA 配对</a>

**提示：** 

**要求：** 
+ 在每一个数组中将给定的字母作为第一个碱基返回
+ 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组

```javascript
function pair(str) {
	var arr = str.split('');
	var newStr = [];
	arr.forEach(function(val) {
		switch (val) {
			case 'A':
				newStr.push(['A', 'T']);
				break;
			case 'T':
				newStr.push(['T', 'A']);
				break;
			case 'C':
				newStr.push(['C', 'G']);
				break;
			case 'G':
				newStr.push(['G', 'C']);
				break;
		}
	});
	return newStr;
}

pair("GCG");
```
<a href="#">返回目录</a>
***

### <a id="fear-not-letter">丢失的字母</a>

**提示：** 

**要求：** 
+ 从传递进来的字母序列中找到缺失的字母并返回它
+ 如果所有字母都在序列中，返回 undefined

```javascript
function fearNotLetter(str) {
	if(str.length === 1)
		return undefined;
	var min = str.charCodeAt(0);
	var max = str.charCodeAt(str.length - 1);
	var newStr = [];
	while(min <= max) {
		newStr.push(String.fromCharCode(min));
		min ++;
	}
	newStr = newStr.filter(function(val) {
		return str.indexOf(val) === -1;
	});
	return newStr.length === 0 ? undefined : newStr.join('');
}

fearNotLetter("abce")；
```
<a href="#">返回目录</a>
***

### <a id="unite">集合排序</a>

**提示：** 

**要求：** 
+ 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组
+ 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序

```javascript
function unite(arr1, arr2, arr3) {
	var newArr = Array.prototype.slice.call(arguments);
	return newArr.reduce(function(prev, curr) {
		var arr = curr.filter(function(val) {
			return prev.indexOf(val) === -1;	//arr存储curr独立于prev的元素
		});
		return prev.concat(arr);
	}, []);		//防止第一个数字中有重复的元素
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
<a href="#">返回目录</a>
***

### <a id="convert">转换 HTML 实体</a>

**提示：** 

**要求：** 将字符串中的字符 &、<、>、"（双引号）,以及'（单引号）转换为它们对应的 HTML 实体

```javascript
function convert(str) {
	var escapeChars = {
		'&': 'amp',
		'>': 'gt',
		'<': 'lt',
		'"': 'quot',
		'\'': 'apos'
	};
	return str.replace(/[<>"'&]/g, function(match) {
		return '&' + escapeChars[match] + ';';
	});
}

convert("Dolce & Gabbana");
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

**提示：** 只有1和它本身两个约数的数叫质数, 1 不是质数，因为它只能被自身整除

**要求：** 求小于等于给定数值的质数之和

```javascript
// 简单嵌套循环
function sumPrimes(num) {
	var sum = 0;
	var temp = 2;
	while(temp <= num) {
		for(var i = 2; i <= temp; i++) {
			if(i === temp)
				sum += temp;
			if(temp % i === 0)
				break;
		}
		temp++ ;
	}
	return sum;
}

sumPrimes(10);
```
<a href="#">返回目录</a>
***

### <a id="gcd">最小公倍数</a>

**提示：** a和b的`最小公倍数` = (a*b) / a和b的`最大公约数`，求得最大公约数即得解

**要求：** 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数,两个参数不一定按数字顺序排序

```javascript
function gcd(a, b) {		//新建函数： 递归求两个数的最大公约数
	var max = Math.max(a, b);
	var min = Math.min(a, b);
	if(max%min === 0) {
		return min;
	}
	return gcd(min, max%min);	//尾递归优化
}
function smallestCommons(arr) {
	var newArr = [];
	var i = Math.min(arr[0], arr[1]);
	var j = Math.max(arr[0], arr[1]);
	while(i <= j) {				//列出区间的所有数字
		newArr.push(i);
		i++;
	}
	return newArr.reduce(function(accu, curr) {		//利用reduce
		return accu*curr/gcd(accu, curr);
	});	
}

smallestCommons([1,5]);
```
<a href="#">返回目录</a>
***

### <a id="drop">放弃</a>

**提示：** 

**要求：** 
+ 第一个参数是一个数组，第二个参数是一个函数，用来测试数组的第一个元素
+ 如果参数函数返回fasle，就从数组中抛出该元素(注：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true
+ 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组

```javascript
function drop(arr, func) {
	if(arr.length === 0)
		return [];
	for(var i = 0; i < arr.length; i++) {
		if(i === arr.length - 1)
			return [];
		if(func(arr[i]))
			return arr.slice(i);
	}
}

drop([1, 2, 3], function(n) {return n < 3; })
```
<a href="#">返回目录</a>
***

### <a id="steamroller">扁平化</a>

**提示：** 利用递归求解

+ 当数组元素是单个元素时，直接push()
+ 当数组元素是一维数组时，直接concat()
+ 当数组元素是多维数组时，递归降维

**要求：** 对嵌套的数组进行扁平化处理，你必须考虑到不同层级的嵌套

```javascript
function steamroller(arr) {
	var flag = true;
	var num = 0;
	while(num < arr.length) {     //判断数组中是否是一维数组
		if(Array.isArray(arr[num])){
			flag = false;
			break;
		}
		num ++;
	}
	if(flag)           // 递归退出条件：当数组是一维数组时
		return arr;

	var newArr = [];
	arr.forEach(function(val) {
		if(!Array.isArray(val)) {
			newArr.push(val);
		} else {
			newArr = newArr.concat(steamroller(val));  // 递归调用自身
		}
	});
	return newArr;     // 输出数组
}

steamroller([1, [2], [3, [[4]]]]);

// 也可用every()方法代替while循环
function steamroller(arr) {
	var flag = arr.every(function(val) {    // 判断数组是否为一维数组
		return !Array.isArray(val);
	});
	if(flag)                // 递归推出条件
		return arr;

	var newArr = [];
	arr.forEach(function(val) {
		if(!Array.isArray(val)) {
			newArr.push(val);
		} else {
			newArr = newArr.concat(steamroller(val));
		}
	});
	return newArr;
}

steamroller([1, [2], [3, [[4]]]]);
```
<a href="#">返回目录</a>
***


### <a id="binary-agent">二进制转化</a>

**提示：** 二进制字符串是以空格分隔的

**要求：** 传入二进制字符串，翻译成英语句子并返回

```javascript
function binaryAgent(str) {
	var newStr = str.replace(/\s/g, '');
	return newStr.replace(/\d{8}/g, function(match) {
		return String.fromCharCode(parseInt(match, 2));
	});
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
<a href="#">返回目录</a>
***

### <a id="every">真假值判断</a>

**提示：** 

**要求：** 如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真,函数返回ture；反之，返回false

```javascript
// 用for循环实现
function every(collection, pre) {
	for(var i = 0; i < collection.length; i++) {
		if(!collection[i].hasOwnProperty(pre))
			return false;
		if(!collection[i][pre])
			return false;
	}
	return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex");

// 用every()实现
function every(collection, pre) {
	return collection.every(function(val) {
		if(!val.hasOwnProperty(pre))
			return false;
		return Boolean(val[pre]);
	});
}

every([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex");
```
<a href="#">返回目录</a>
***

### <a id="add">可选参数</a>

**提示：** 

**要求：** 
+ 创建一个计算两个参数之和的 function
+ 如果只有一个参数，则返回一个接收一个参数function，再调用这个function，返回求和的结果
+ 如果两个参数都不是有效的数字，则返回 undefined

```javascript
function add() {
	var arr = Array.prototype.slice.call(arguments);
	if(arr.length === 1)
		return typeof arr[0] !== 'number' ? undefined : function(num) {
			return typeof num === 'number' ? arr[0] + num : undefined;
		};
	if(typeof arr[0] !== 'number' || typeof arr[1] !== 'number')
		return undefined;
	return arr[0] + arr[1];
}

console.log(add(2)([3]));
```
<a href="#">返回目录</a>
***

### <a id="person">构造一个 Person 类</a>

**提示：** 

**要求：** 用下面给定的方法构造一个对象,方法有

+ getFirstName(), getLastName(), getFullName()
+ setFirstName(first), setLastName(last), setFullName(firstAndLast)
+ 所有有参数的方法只接受一个字符串参数，所有的方法只与实体对象交互
```javascript
// 题目要求对象只能有6个属性，所有就这样写了
var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var arr = fullName.split(" ");
    var firstName = arr[0];
    var lastName = arr[1];

    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function() {
        return fullName;
    };
    this.setFirstName = function(first) {
        firstName = first;
        fullName = firstName + ' ' + lastName;
    };
    this.setLastName = function(last) {
        lastName = last;
        fullName = firstName + ' ' + lastName;
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        arr = fullName.split(" ");
        firstName = arr[0];
        lastName = arr[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
<a href="#">返回目录</a>
***

### <a id="orbital-period">绘制碎片图</a>

**提示：** 地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI

**要求：** 
+ 返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期
+ 求得的值应该是一个与其最接近的整数，轨道是以地球为基准的
```javascript
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (var i = 0; i < arr.length; i++) {
        arr[i].orbitalPeriod = Math.round(2 * Math.PI * (earthRadius + arr[i].avgAlt) * Math.sqrt((earthRadius + arr[i].avgAlt) / GM));
        delete arr[i].avgAlt;
    }
    return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```
<a href="#">返回目录</a>
***




## 更多

### <a id="update-inventory">更新仓库库存</a>

**要求：**

**提示：**
```js
// 很长的代码
function sortArr(arr) {   //排序函数
    return arr.sort(function(a, b) {
        return a[1] > b[1];
    });
}
function updateInventory(arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0)  //特殊情况
        return [];
    if(arr1.length === 0)
        return sortArr(arr2);
    if(arr2.length === 0)
        return sortArr(arr1);
    var resKeys = [];           // 获取arr1的'键'
    arr1.forEach(function(val) {
        resKeys.push(val[1]);
    });
    arr2.forEach(function(val) {   // 遍历arr2，将其push进arr1或者更新数目
        if(resKeys.indexOf(val[1]) === -1)
            arr1.push(val);
        else 
            arr1[resKeys.indexOf(val[1])][0] += val[0];
    });
    return sortArr(arr1);
}
// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
<a href="#">返回目录</a>
***

### <a id="perm-alone">没有连续重复的字符串个数</a>

**要求：**

**提示：**
```js
// 用递归获取n个字符全排列的情况，再筛选（递归部分用了很多时间，而主函数的筛选部分由于处理基数大也用了很大一部分的时间）
function permAlone(str) {
	var allList = getList(str);		// 生成所有序列
	return allList.filter(function(val) {	//筛选删除有连续相同字母的序列
		return !/(\w)\1/.test(val);     //一开始我用replace再判断长度，导致效率更低了	
	}).length;
}
function getList(str, thisChar) {   // 递归函数
	if(str.length === 2){	// 退出递归
		return [ str[0]+str[1], str[1]+str[0] ];
	}
	var char = str[str.length-1];
	var prev = getList(str.slice(0, -1), char);	// 递归获取prev数组
	var now = [];	// 将char插入到prev每个元素的每个位置，存至now数组
	for(var i=0; i<prev.length; i++){
		for(var j=0; j<prev[i].length+1; j++) {
			var item = prev[i].slice(0, j) + char + prev[i].slice(j);
			now.push(item);
		}
	}
	return now;	// 返回now数组作为下一轮循环的prev数组
}

permAlone('aab');
```
<a href="#">返回目录</a>
***

### <a id="pairwise">找到你的另一半</a>

**要求：**

**提示：**
```js
// 一开始我是用一个forEach，每次循环修改了arr来使下一次的循环合法
function pairwise(arr, arg) {
    if(arr.length === 0 || arr.length === 1) {
        return 0;
    }
    var sum = 0;
    arr.forEach(function(value, index) {
        var temp = arr.slice(index + 1).indexOf(arg - value);
        if(temp !== -1) {
            arr[index] = NaN;
            sum += index + arr.indexOf(arg - value);
            arr[arr.indexOf(arg - value)] = NaN;
        }
    });
    return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
<a href="#">返回目录</a>
***