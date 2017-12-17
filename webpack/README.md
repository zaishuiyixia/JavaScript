使用webpack打包代码<br><br>
遇到的问题：webpack如何全局引入jquery，如果没有全局引入，打包文件时遇到$符号会报错，报错提示 ：$ is not defined <br><br>
解决方法：jQuery 直接在 html 中引入，然后在 webpack 中把它配置为全局即可，这样模块使用$就不会再报错了。<br><br>
需要修改webpack配置文件webpack.config.js，在配置文件中加入：
<br><br> externals: { <br>
       &nbsp; 'jquery' : 'window.$' <br>
    } <br><br>
使用时则直接 require 进来，webpack 不会把它打包进来：<br><br>
var $ = require('jquery');

[效果预览](https://zaishuiyixia.github.io/JavaScript/webpack/index.html)
