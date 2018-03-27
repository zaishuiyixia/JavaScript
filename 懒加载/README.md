# 懒加载
 
 懒加载实现大体思路：
 
 1. 对于所有的img标签，把真实的地址放入自定义属性data-img。
 
 2. 当滚动页面时，检查页面所有的img标签，看看这个标签是否出现到我们的视野，当出现在我们的视野时
        再去判断它是否已经加载过，如果没有加载，加载它。
       
[预览链接](https://zaishuiyixia.github.io/JavaScript/%E6%87%92%E5%8A%A0%E8%BD%BD/lazyrender.html)
