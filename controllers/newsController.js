var newsController = {}
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var axios = require('axios');

var scrapeUrl = "cnn url";


function getArticles(html) {
  var $ = cheerio.load(html);
  // TODO:
}

newsController.handleGet = function(req, res, next) {
  axios.get(scrapeUrl)
    .then((response) => {
      if(response.status === 200) {
        var html = response.data;
	getArticles(html)

      }
    }, (error) => console.log(err) );

  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({ foo: "bar" }));
}

module.exports = newsController;
