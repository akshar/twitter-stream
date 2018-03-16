var tweetController = {} ;


tweetController.handleGet =  function(req,res, next)  {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }));
}

module.exports = tweetController;
