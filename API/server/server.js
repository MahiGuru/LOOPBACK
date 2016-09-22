var loopback = require('loopback')
var boot = require('loopback-boot')
var path = require('path')
var app = module.exports = loopback();

var passport = require("passport");
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started')
        var baseUrl = app.get('url').replace(/\/$/, '')
        console.log('Web server listening at: %s', baseUrl)
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    })
}

app.use(loopback.static(path.resolve(__dirname, '../../CLIENT/ANGULAR1')))

// required for passport 
app.use(session({
    secret: "6432sdf436sdfey634342",
    name: "loopback1234",
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
})
var strategy = require("./passport/strategys.js");
strategy(passport, app);
var strategyRoutes = require("./passport/strategyRoutes.js");
strategyRoutes(app, passport);