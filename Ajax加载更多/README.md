# Ajax load more Demo

## How to start
1. Clone this repository to your local folder
2. Open your terminal, `cd` to target folder, run
```bash
npm install -g server-mock 
cd Ajax加载更多
server start or  mock start
```
3. Open your browser, and navigate to `http://localhost:8080/index.html`

## 解释代码
```
__ router.js
__ index.html
__ main.css
```
- `router.js ` 是后端文件，用来模拟数据交互
- `index.html` 是静态文件
- `main.css` 是静态文件样式

这里使用到了server-mock这个npm包来mock数据。使用之前需要全局安装。
