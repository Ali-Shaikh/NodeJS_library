var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get(function(req, res){
        res.render('books', {
            title: 'Books',
            nav: [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]
        });
    });

bookRouter.route('/single')
    .get(function(req, res){
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter)


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]
    });
});

app.get('/Books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);

});