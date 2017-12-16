/*
* @Author: Administrator
* @Date:   2017-12-12 13:38:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 21:59:18
*/
var $ = require('jquery');
function Carousel(){
    var $imgCt = $('.img-ct'),
        $imgWidth = $('.carousel .img-ct >li').eq(0).width(),
        $imgLen = $('.carousel .img-ct >li').length,
        $preBtn = $('.carousel .pre'),
        $nextBtn = $('.carousel .next'),
        $bullet = $('.bullet li'),
        //设置状态锁
        lock = false,
        //设置计时器
        clock,
        //记录当前所在页面
        currentIndex = 0;



    var $last = $imgCt.children("li").last().clone(),
        $first = $imgCt.children("li").first().clone();
    
    //在图片列表开头和结尾分别添加最后一张图和第一张图，这时图片的个数变为6，而$imgLen值还是4，不是动态改变的
    $imgCt.append($first);
    $imgCt.prepend($last);

    $imgCt.css({
      //因为轮播的图片个数可以根据需求改变，所以$imgCt的宽度不应该写死，而应该动态计算
      width: $imgWidth*($imgLen+2),
      left: -$imgWidth
    })


    $preBtn.on('click',function(){
      playPre(1);
    })
    $nextBtn.on('click',function(){
      playNext(1);
    })

    timeClock();

    //当鼠标在图片上停留时，停止自动轮播
    $(".carousel").on("mouseenter",function(){
        clearInterval(clock);
    })
    //当鼠标离开时，开始自动轮播
    $(".carousel").on("mouseleave",function(){
        timeClock();
    })

    function playNext(len){
        //设置状态锁防止滚动过程中重复点击
        if(lock){
          return;
        }
        lock = true
        //当前图片淡出
        $imgCt.fadeOut(500,function(){
            $imgCt.css({left: "-="+len*$imgWidth});
            currentIndex+=len;
        });
        $imgCt.fadeIn(500,function(){
            if (currentIndex === $imgLen) {
              $imgCt.css({left: -$imgWidth});
              currentIndex = 0;
            }
            setBullet();
            lock = false;
        })
    }

    //点击小按钮滚动到对应图片上
    $bullet.on('click',function(){
        var index = $(this).index();
        if(index > currentIndex){
          playNext(index - currentIndex)
        }else if(index < currentIndex){
          playPre(currentIndex - index);
        }
    })

    function setBullet(){
        $bullet.removeClass('active')
               .eq(currentIndex)
               .addClass('active')
    }
    function timeClock(){
        clock = setInterval(function(){
           playNext(1)
         },2000)
    }
}

module.exports = Carousel;    
