# 自动播放无限循环渐变轮播

轮播实现的大体思路：

- 将需要轮播的图片排成一行，并在需要显示图片的位置开上创建一个和同一张图片尺寸大小相同的窗口，该窗口设置属性overflow: hidden，隐藏超出可视窗口的图片，然后控制图片层的左右移动，进而实现轮播效果。

[预览链接](https://zaishuiyixia.github.io/JavaScript/%E8%BD%AE%E6%92%AD/fadeCarousel.html)
