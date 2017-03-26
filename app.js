var express = require('express')
var app = express()
var path = require('path')
var cors = require('cors')


/*app.use(cors);
app.get('/product/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})*/

app.use(function(req, res, next) {
 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ## CORS middleware
//
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);
*/

app.use('/body_bg.jpg', express.static('body_bg.jpg'));
app.get('/', function (req, res, next) {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname + '/index.html'));
  console.log ("dir name " + __dirname);
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
