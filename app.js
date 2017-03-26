var express = require('express')
var app = express()
var path = require('path')

app.use('/body_bg.jpg', express.static('body_bg.jpg'));

app.get('/', function (req, res, next) {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname + '/index.html'));
})


app.get('/beta3', function (req, res, next) {
  //res.send('Hello World!')
  app.use('/js', express.static(path.join(__dirname, 'beta3/js')));
  app.use('/beta3', express.static(path.join(__dirname, 'beta3')));
  res.sendFile(path.join(__dirname + '/beta3/index.html'));
  console.log ("b3 dir name " + __dirname);
})

app.get('/beta2', function (req, res, next) {
  //res.send('Hello World!')
  app.use('/js', express.static(path.join(__dirname, 'beta2/js')));
  app.use('/beta2', express.static(path.join(__dirname, 'beta2')));
  res.sendFile(path.join(__dirname + '/beta2/index.html'));
  console.log ("b2 dir name " + __dirname);
})

//app.use('/beta3', express.static(path.join(__dirname, 'beta3')));
//app.use('/js', express.static(path.join(__dirname, 'beta3/js')));

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')

})
