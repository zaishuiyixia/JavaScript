/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Administrator
* @Date:   2017-12-12 13:47:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:34
*/
var $ = __webpack_require__(0);
function Waterfull(){
    var maxIndex = 0;
    function waterfull(){
        var colLength = parseInt($('.content').width()/$('.item').width()),
            itemArr = [];
      
      for(var i = 0; i < colLength; i++){
          itemArr[i] = 0;
      }

      $('.item').each(function () {
          var minValue = Math.min.apply(null,itemArr),
              minIndex = itemArr.indexOf(minValue);

        $(this).css({
            top: itemArr[minIndex],
            left: minIndex*$(this).outerWidth(true)
        })

        itemArr[minIndex] += $(this).outerHeight(true);
        maxIndex = itemArr[minIndex];
      });
    }

    waterfull();

    $(window).resize(function(){
        waterfull()
    });

    return {
        waterfull: waterfull,
        maxIndex: maxIndex
    }
}

module.exports = Waterfull;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Administrator
* @Date:   2017-12-12 13:38:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 21:59:18
*/
var $ = __webpack_require__(0);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Administrator
* @Date:   2017-12-12 13:50:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:06
*/
var Waterfull = __webpack_require__(1);
var $ = __webpack_require__(0);
function Exposure(){
    var btn = document.querySelector('#load-more');
    var ct = document.querySelector('#ct');
    //设置状态锁，防止数据到来之前用户重复点击
    var isDataArrive = true;
    var time = 0;

    btn.addEventListener('click',function (e) {
        e.preventDefault();
       
        if (!isDataArrive) {
          return;
        }

        loadData(function(news){
          renderPage(news);     
        })     
    })

    function loadData(callback){
        ajax({
          type: 'get',
          url: '/loadMore', 
          onSuccess: callback,
          onError: function(){
            console.log('出错了')
          }
        })
    }

    function renderPage(results){
       var fragment = document.createDocumentFragment();
        for (var i = 1; i < results.length+1; i++) {
            var liNode = document.createElement('li');
            liNode.setAttribute('class','h'+i+' item');
            var imgNode = document.createElement('img');
            imgNode.setAttribute('src',results[i-1]);
            liNode.appendChild(imgNode);
            ct.appendChild(liNode);
        };
        Waterfull().waterfull();
        time += 1;
        // ct.appendChild(fragment);
        ct.style.height = Waterfull().maxIndex+'px';     
    }

    function ajax(options){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          if (xhr.readyState === 4) {
              if (xhr.status === 200 || xhr.status === 304) {
                  //与后端约定好，传输的数据类型为JSON字符串，JSON.parse()用来把JSON字符串解析为原生JavaScript值
                  var results = JSON.parse(xhr.responseText);
                  options.onSuccess(results);
              }else{
                options.onError();
              }
              //数据到来，布尔值设为true
              isDataArrive = true
          }
        }

      if(options.type.toLowerCase() === 'get'){
          xhr.open(options.type, options.url, true)
          xhr.send()
      }
      if(options.type.toLowerCase() === 'post'){
          xhr.open('post', options.url, true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.send();
      }
        //发送ajax请求，这时数据还没有到来，布尔值设为false
        isDataArrive = false;
    }
}
    
module.exports = Exposure;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Administrator
* @Date:   2017-12-12 13:32:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:23
*/
var $ = __webpack_require__(0);
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Administrator
* @Date:   2017-12-16 17:48:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-22 12:20:35
*/
var $ = __webpack_require__(0);
var Carousel = __webpack_require__(2);
var Expose = __webpack_require__(3);
var goTop = __webpack_require__(4);
var Waterfull = __webpack_require__(1);

Carousel();

Expose($);

goTop('.back-to-top');

Waterfull();

/***/ })
/******/ ]);