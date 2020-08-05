var express = require('express');
//var exSession 	= require('express-session');
var bodyParser = require('body-parser');


var home = require('./controllers/home');
var signup = require('./controllers/signup');
var login = require('./controllers/login');
var adminDash = require('./controllers/adminDash');
var managerDash = require('./controllers/managerDash');
var salesmanDash = require('./controllers/salesmanDash');
var deliverymanDash = require('./controllers/deliverymanDash');
var customerDash = require('./controllers/customerDash');
var changepassword = require('./controllers/changepassword');
var empManageAdmin = require('./controllers/empManageAdmin');
var prodManageAdmin = require('./controllers/prodManageAdmin');
var regManageAdmin = require('./controllers/regManageAdmin');
var orderManageAdmin = require('./controllers/orderManageAdmin');

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
app.use('/adminDash', adminDash);
app.use('/adminDash/empManageAdmin', empManageAdmin);
app.use('/adminDash/prodManageAdmin', prodManageAdmin);
app.use('/adminDash/regManageAdmin', regManageAdmin);
app.use('/adminDash/orderManageAdmin', orderManageAdmin);
app.use('/managerDash', managerDash);
app.use('/salesmanDash', salesmanDash);
app.use('/deliverymanDash', deliverymanDash);
app.use('/customerDash', customerDash);
app.use('/changepassword', changepassword);


app.listen(3333, function()
{
	console.log('_____________________________\n\tBUSINESS TOOL\nEXPRESS HTTP SERVER STARTED\nPORT NO. 3333\n_____________________________');
});

app.get('/', function(req, res)
{
	res.render('home/index');
});

app.get('/home', function(req, res)
{
	res.render('home/index');
});
