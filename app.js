var express = require ('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('viewa','src/views');
app.set('view engine', 'jade');


app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/Books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);

});