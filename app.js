var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');


var home = require('./controllers/home');
var signup = require('./controllers/signup');
var login  = require('./controllers/login');
var aboutUser = require('./controllers/aboutUser');
var logout = require('./controllers/logout');
var adminDash = require('./controllers/adminDash');
var managerDash = require('./controllers/managerDash');
var salesmanDash = require('./controllers/salesmanDash');
var deliverymanDash = require('./controllers/deliverymanDash');
var customerDash = require('./controllers/customerDash');
var changepassword = require('./controllers/changepassword');
var empManageAdmin = require('./controllers/empManageAdmin');
var prodManageAdmin	= require('./controllers/prodManageAdmin');
var regManageAdmin = require('./controllers/regManageAdmin');
var orderManageAdmin = require('./controllers/orderManageAdmin');
var orderManageManager = require('./controllers/orderManageManager');
var prodManageManager = require('./controllers/prodManageManager');
var salesHistory = require('./controllers/salesHistory');
var notice = require('./controllers/notice');
var notes = require('./controllers/notes');
var chatBox = require('./controllers/chatBox');

var app = express();

//config
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.username = req.session.username;
  next();
});

app.use('/', home);
app.use('/home', home);
app.use('/signup', signup);
app.use('/login', login);
app.use('/aboutUser', aboutUser);
app.use('/logout',logout);
app.use('/adminDash', adminDash);
app.use('/adminDash/empManageAdmin', empManageAdmin);
app.use('/adminDash/prodManageAdmin', prodManageAdmin);
app.use('/adminDash/regManageAdmin', regManageAdmin);
app.use('/adminDash/orderManageAdmin', orderManageAdmin);
app.use('/managerDash', managerDash);
app.use('/managerDash/prodManageManager', prodManageManager);
app.use('/managerDash/orderManageManager', orderManageManager);
app.use('/salesmanDash', salesmanDash);
app.use('/deliverymanDash', deliverymanDash);
app.use('/customerDash', customerDash);
app.use('/changepassword', changepassword);
app.use('/salesHistory', salesHistory);
app.use('/notice', notice);
app.use('/notes', notes);
app.use('/chatBox', chatBox);


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
