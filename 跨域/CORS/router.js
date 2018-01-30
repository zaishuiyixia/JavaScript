

app.get('/getNews',function(req,res){
  var news = [
    "第十一日前瞻：中国冲击4金 博尔特再战1000米跨栏",
    "正直播LOL赛事 SKT、EDG再相遇",
    "火影今日完结！ 耗死柯南的重任交给了海贼王",
    "钓鱼岛今日进行军事演习",
    "在俄罗斯生活是一种什么样的体验",
    "大学宿舍楼下摆蜡烛表白,学校保安拿灭火器迅速扑灭",
    "同一首歌走进深圳",
    "骑士VS勇士"
  ]
  var data = [];
  for(var i = 0; i < 3; i++){
    var index = parseInt(Math.random()*news.length);
    data.push(news[index]);
    news.splice(index,1);
  }
  /*表示从http://a.jgh.com:8080这个地址来的请求，在数据传递回去时会在请求头里加上Access-Control-Allow-Origin：http://a.jgh.com:8080，浏览器根据传递回来的请求头的地址信息判断放不放行传递过来的数据
  所以同源策略、跨域的问题是浏览器的一个机制，因为是浏览器最后判断到底要不要放行从服务器发过来的数据*/
  res.header("Access-Control-Allow-Origin","http://localhost:8080");

  //表示无论从哪个地址来的请求，在数据传递回去时会在请求头里加上Access-Control-Allow-Origin，浏览器都会放行传回来的数据
  //res.header("Access-Control-Allow-Origin","*")
  res.send(data);
})