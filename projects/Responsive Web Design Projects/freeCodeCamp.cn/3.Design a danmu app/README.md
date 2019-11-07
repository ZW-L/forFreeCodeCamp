# FCC基础项目 —— 创建一个 danmu-app
## **要求**
+ 页面包含一个`显示弹幕的窗口`，一个`输入弹幕的input`，和`发送弹幕`、`清除弹幕`两个按钮；

## **version-1**
<br>
### **工具: &emsp;bootstrap** + **jQuery**

+ 基础界面用 **bootstrap** 快速构建（其实可以不用bootstrap，毕竟只有几个控件，这里是为了增加bootstrap熟练度）；
+ DOM操作用 **jQuery** （同样也是为了增加jQuery熟练度）；
<br>

### **思路**
+ 事件函数：发送弹幕 `$sendBullet()` 和清除弹幕 `$clearBullet()` 
   + `$sendBullet()`：<font color='red'>主要事件。</font>读取`input`的内容输出至弹幕窗口，利用`setInterval()`使弹幕运动（每单位时间向左移动一定距离），当弹幕完全离开视窗时，删除该弹幕节点（不把过多无用节点保存至DOM）。
   + `$clearBullet()`：直接将弹幕视窗的弹幕节点清空。
+ 界面设计：
   + 弹幕颜色：函数`getCcolor()`，利用随机数返回`rgb()`颜色；
   + 弹幕位置：将弹幕视窗分割成一定行数（定义为弹道），保持其行高小于弹幕高度，防止弹幕上下重叠；发送弹幕时生成随机数，使弹幕在指定弹道运动；
   + 弹幕进入和离开： 设置CSS属性`hidden`，弹幕没进入或者部分离开时，将其超出弹幕视窗内容隐藏；
   + 弹幕不换行/控制弹幕长度：弹幕CSS属性 `white-space: nowrap;` 防止弹幕换行，`input` 设置 `maxlength` 控制输入长度。
+ 需要改进：
   + 弹幕上下不会重叠，但是会有弹幕出现在同一弹道上，需要控制出现在同一弹道上的弹幕不会出现重叠（两条弹幕的头尾之间有间隙）；
   + 是否能利用其他方式使弹幕运动，而不是使用 `setInteval()` ；
   + 是否能实现"机器人弹幕"（定时自动发送弹幕）；
   + 是否能添加 `暂停弹幕`、 `继续弹幕` 的功能。

<br>
## **version-2**
<br>
### **工具: &emsp;javascript/ES6 + CSS/CSS3**
+ 由于项目DOM元素较少，所以此次没有使用任何库，而是利用原生的 `js/es6` 和 `css/css3` 实现。

### **思路**
+ 对比version-1，时间处理最大的改变在于使用 CSS3 的 `animation` （动画）属性来实现弹幕的运动，并在动画完成时删除弹幕节点；
+ 将弹幕节点的 `CSS top` 属性获取修改为从 `getTop()` 函数获取；
+ 添加了“机器人弹幕”的功能;
+ 修改了 `send()` 函数的传参方式；
+ 修改了 `send()` 中删除节点的内容，要先判断节点是否存在，再进行删除；
+ 添加了 `回车事件` ，触发该事件的前提是 `input-danmu` 获取焦点且 `回车键` 按下。

```javascript
document.addEventListener('keydown', function(e){
    const nowFocus = document.getElementById('input-danmu');
    // 当 input-danmu 获取焦点且回车键按下时
    if(document.activeElement === nowFocus && e.keyCode === 13) {
    	send(e, nowFocus.value);
    } 
}, false);
```
+ 可以改进
   + 尽可能降低弹幕出现在同一弹道或者是发生覆盖的几率；
   + 添加禁止弹幕，显示弹幕的功能。

<br>
## **version-3**
<br>
