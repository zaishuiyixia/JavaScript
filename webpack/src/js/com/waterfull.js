/*
* @Author: Administrator
* @Date:   2017-12-12 13:47:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:34
*/
var $ = require('jquery');
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