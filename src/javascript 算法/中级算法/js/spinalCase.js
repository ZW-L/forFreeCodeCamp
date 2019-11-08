// 1.多步正则匹配并 replace()
/* function spinalCase(str) {
  return str.trim() // 去除两端空白
    .replace(/[\s_]/g, '-') // 替换空白符和 '_' 为 '-'
    .replace(/(?!^)(?=[A-Z])/g, '-') // 在非开头的的大写字母前面的位置添加 '-'
    .replace(/-+/g, '-') // 将两个连续或以上的 '-' 替换成一个 '-'
    .toLowerCase() // 转换为小写
} */

// 2.单个正则匹配指定位置，通过 split() 分割为数组，最后通过 join() 组合为字符串
function spinalCase(str) {
  return str.trim()
    .split(/(?=[A-Z])|\s+|_|-/g)
    .join('-')
    .toLowerCase()
}

spinalCase('This Is Spinal Tap')