/*
* @Author: Administrator
* @Date:   2017-12-16 17:48:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-22 12:20:35
*/
var $ = require('jquery');
var Carousel = require('./com/carousel.js');
var Expose = require('./com/expose.js');
var goTop = require('./com/gotop.js');
var Waterfull = require('./com/waterfull.js');

Carousel();

Expose($);

goTop('.back-to-top');

Waterfull();