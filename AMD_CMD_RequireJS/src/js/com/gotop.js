/*
* @Author: Administrator
* @Date:   2017-12-12 13:32:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-12 13:37:43
*/
define(['jquery'],function($){
    function goTop(id){
        var backButton = $(id);
        backButton.on('click',function(){
          $('html').animate({
            scrollTop: 0
          },100)
        });
        $(window).on('scroll',function(){
            if ($(window).scrollTop() > 160) {
                backButton.fadeIn();
            }else{
                backButton.fadeOut();
            }
        });
        $(window).trigger('scroll');
    }

    return goTop;
})