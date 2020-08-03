var express = require('express');
//var exSession 	= require('express-session');
var bodyParser = require('body-parser');


var home = require('./controllers/home');
var signup = require('./controllers/signup');
var login = require('./controllers/login');

var app = express();

//config
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

//middleware
app.use(bodyParser.urlencoded({extended: true}));
//app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/', home);
app.use('/home', home);
app.use('/signup', signup);
app.use('/login', login);


app.listen(3333, function()
{
	console.log('_____________________________\nBUSINESS TOOL\nEXPRESS HTTP SERVER STARTED\nPORT NO. 3333\n_____________________________');
});

app.get('/', function(req, res)
{
	res.render('home/index');
});

app.get('/home', function(req, res)
{
	res.render('home/index');
});
