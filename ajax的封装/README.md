# Ajax的封装

## How to start
1. Clone this repository to your local folder
2. Open your terminal, `cd` to target folder, run
```bash
npm install -g server-mock 
cd ajax的封装
server start or  mock start
```
3. Open your browser, and navigate to `http://localhost:8080/index.html`

## 解释代码
```
__ router.js
__ index.html
```
- `router.js ` 是后端文件，用来模拟数据交互
- `index.html` 是静态文件

这里使用到了server-mock这个npm包来mock数据。使用之前需要全局安装。
