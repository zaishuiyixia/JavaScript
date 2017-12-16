/*
* @Author: Administrator
* @Date:   2017-12-11 13:13:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-11 13:34:55
*/

app.get('/loadMore',function(req,res){
   var data = [];
   data[0]='http://ossweb-img.qq.com/images/lol/web201310/skin/big1000.jpg';
   data[1]='http://ossweb-img.qq.com/images/lol/web201310/skin/big81000.jpg';
   data[2]='http://ossweb-img.qq.com/images/lol/web201310/skin/big92000.jpg';
   res.send(data);
})