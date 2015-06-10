var cheerio = require('cheerio');
var request = require('request');
var url     = require('url');


exports.create = function(word, callback){
  request('http://acronym-maker.com/generate/?w=' + (word), function(err, response, html){
    if(err) {callback(err);}else{
      var $ = cheerio.load(html);
      var words = $('.acronym')[0].children;
      words = [].slice.call(words);
      var definition = [];
      words.forEach(function(word,i){
        definition.push(word.children[1].children[0].children[0].data);
      });
      callback(undefined, definition);
    }
  });
};
