app.get('/getNews',function(req,res){
	var news = [
		"1.第11日前瞻：中国冲击4金 博尔特再战200米羽球",
		"2.正直播柴彪、宏伟出站",
		"3.女排将死磕巴西",
		"4.没有中国选手和巨星的110米栏 我们还看吗",
		"5.中英上演奥运会金牌大战",
		"6.博彩赔率挺中国夺回第二纽约时报",
		"7.最”出柜奥运？“",
		"8.下跪与洪荒之力"
	]
	var data = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index,1);
	}
	res.header("Access-Control-Allow-Origin","http://a.jrg.com:8080");
	//res.header("Access-Control-Allow-Origin","*")
	res.send(data);
})