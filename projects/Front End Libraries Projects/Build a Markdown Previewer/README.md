## 在线阅览

[codepen](https://codepen.io/lizhiwen93/pen/bGGjJRM)

## 项目结构

```
|-root
  |-index.html
  |-style.css # 公共样式
  |-README.md
```


## 引用库

```html
<!-- font awesome 图标库 -->
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- markdown 格式化 -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<!-- React -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<!-- JSX 支持 -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## 核心代码

### 组件

**所有组件:**

+ ToolBar：工具栏，目前只有清空按钮
+ Editor：编辑区域
+ Previewer：文本格式化显式区域
+ Container：组合各组件

**渲染为：**

```jsx
<Container>
  <ToolBar />
  <Editor />
  <Previewer />
</Container>
```
