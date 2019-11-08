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