## 项目结构

```
|-root
  |-index.html
  |-style.css # 公共样式
  |-quotes.json # 随机短语文件，可以添加到自己的服务器或请求包含该文件的服务器
  |-README.md
```


## 引用库

```html
<!-- font awesome 图标库 -->
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- React -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<!-- JSX 支持 -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- axios 发送请求 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
```

## 核心代码

### 组件

**所有组件:**

+ Text：包括引用短语和作者
+ BtnBar：包括底部几个可用按钮
+ Container：组合 Text 和 BtnBar 组件

**渲染为：**

```jsx
<Container>
  <Text />
  <BtnBar />
</Container>
```

### 数据

+ `state`： `Container` 维护一份 `state`，向下流至 `Text` 和 `BtnBar` 组件：

```jsx
constructor(props) {
  super(props)
  this.state = {
    bgc: 'rgb(52, 34, 36)',
    currentQuote: {
      quote: 'If you do what you\'ve always done, you\'ll get what you\'ve always gotten.',
      author: 'Tony Robbins',
    },
    quotes: [],
  }
}
```

+ `axios` 请求： 在 `Container` 组件的 `componentDidMount` 生命周期中发送请求，获取 `quotes` 存至自身 `state`：

```jsx
componentDidMount() {
  const url ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json#'
  axios.get(url).then(res => {
    console.log('get quotes...')
    this.setState({
      quotes: res.data.quotes
    })
  })
}
```

+ 状态提升： `BtnBar` 组件中的 `New quote` 按钮触发 `onClick` 事件，调用 `onUpdateQuote()`，通知父组件 `Container` 更新状态：

```jsx
// BtnBar 组件
// 事件处理
handleClick() {
  this.props.onUpdateQuote()
}
// render()
<a href="#" id="new-quote" title="Create new quote"
  style={{ backgroundColor: this.props.bgc }} 
  onClick={this.handleClick}
>New quote</a>


// Container 组件
// 事件处理
handleUpdateQuote() {
  const index = Math.floor(Math.random() * this.state.quotes.length) // 获取随机索引
  const bgc = randomColor() // 获取随机 rgb 颜色
  this.setState({
    bgc,
    currentQuote: this.state.quotes[index]
  })
}
// render()
<QuoteBtn 
  bgc={this.state.bgc}
  onUpdateQuote={this.handleUpdateQuote}
/>
```