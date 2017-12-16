/*
* @Author: Administrator
* @Date:   2017-12-12 13:32:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:23
*/
var $ = require('jquery');
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

module.exports = goTop;