var fs           = require('fs');
  var stream = require('stream');


  function randomWordStream(maxWords){
      var rs = stream.Readable();
      var wordContents = fs.readFileSync('./words', 'utf8');
      var words = wordContents.split("\n");
      var currentWord = 0;

      rs._read = function () {
          if (currentWord >= maxWords) {
              return rs.push(null);
          }

          currentWord ++;
          setTimeout(function () {

              var randomIndex = Math.floor((Math.random() * words.length));
              rs.push(words[randomIndex] + '\n');
          }, 100);
      };

      return rs;
  }

   function wordWriteStream(){
      var ws =  stream.Writable();
      ws._write = function (chunk, enc, next) {
          setTimeout(function(){
            console.log(chunk.toString());
              next();
          }, 1000);
      };

      return ws;
  }

  function upperCaseStream(){
      var ws = stream.Transform();

      ws._transform = function(chunk, enc, next){
          var upper = chunk.toString().toUpperCase();
          setTimeout(function(){
              this.push(upper);
              next();
          }.bind(this), 100);
      }

      return ws;
  }

  var rws = new randomWordStream();
  var ucs = new upperCaseStream();
  var wws = new wordWriteStream();

  rws.pipe(ucs).pipe(wws);