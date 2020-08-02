var express 	= require('express');
//var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var home 		= require('./controllers/home');
//ar login 		= require('./controller/login');

//var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));



//middleware
app.use(bodyParser.urlencoded({extended: false}));
//app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/home', home);
//app.use('/login', login);
//app.use('/logout', logout);


app.listen(3333, function()
{
	console.log('BUSINESS TOOL\nEXPRESS HTTP SERVER STARTED\nPORT:3333');
});

app.get('/', function(req, res)
{
	res.render('home/index');
});
