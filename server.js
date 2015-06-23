var express = require('express'),
    app     = express();

app.use(express.static('public'));

app.set('views', './views'); // specify the views directory
app.set('view engine', 'jade');
if (app.get('env') === 'development') { //leave in until production
  app.locals.pretty = true;
}

app.get('/', function (req, res) {
    res.render('index', {title: 'EmergaCore', message: 'EmergaCore mapping test site'});
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});