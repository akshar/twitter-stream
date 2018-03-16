var tweetController = {} ;
var config = require("../config");
var Twit = require('twit');

var T = new Twit(config);


function getTimeline(screenName, limit) {
  var options = { screen_name: screenName,
                  count: limit };

  return T.get('statuses/user_timeline', options)
}

tweetController.handleGet =  function(req,res, next)  {
  getTimeline("foo", 2).then(function(response) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ tweets: response }));
  });
}

module.exports = tweetController;
