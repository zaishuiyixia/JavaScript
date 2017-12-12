/*
* @Author: Administrator
* @Date:   2017-12-12 13:24:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-12 14:50:39
*/
define(['jquery','com/gotop','com/waterfull','com/carousel','com/expose'],function($,goTop,Waterfull,Carousel,Exposure){
    goTop('.back-to-top');
    Waterfull();
    Carousel();
    Exposure();
})