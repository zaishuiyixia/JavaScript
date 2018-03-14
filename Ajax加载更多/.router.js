function setRouter(app){ 
 var router = app; 

app.get('/loadMore',function(req,res){

  var curIdx = req.query.index;
  console.log(req.query)
  console.log(curIdx)
  var len= req.query.length;
  var data = [];

  for (var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i))
  }

  res.send(data);
})


app.post('/loadMore',function(req,res){

  var curIdx = req.body.index;
  var len= req.body.length;
  var data = [];

  for (var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i))
  }

  res.send(data);
})}
 module.exports.setRouter = setRouter