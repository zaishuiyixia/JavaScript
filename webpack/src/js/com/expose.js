/*
* @Author: Administrator
* @Date:   2017-12-12 13:50:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 22:00:06
*/
var Waterfull = require('./waterfull.js');
var $ = require('jquery');
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