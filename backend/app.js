// NPM dependencies
const express =			require('express');
const logger = 			require('morgan');
const bodyParser = 	require('body-parser');
const passport = 		require('passport');
const parseError =	require('parse-error');
const cors = 				require('cors');
const mysql =				require('mysql');

const app = express();

// importing routes and configurations
const routeV1 = require('./routes/v1');
const config = require('./config/config');

// Hook up the HTTP logger.
app.use(logger('dev'));

// Parse as urlencoded and json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport
app.use(passport.initialize());

// Log env
console.log("Environment: ", config.app);


// Creating the database
/*var conection = mysql.createConnection({
  host: config.db_host,
  user: config.db_user,
  password: config.db_password
});

conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let query = "CREATE DATABASE " + config.db_name;
  conection.query(query, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/

// Connect with the database and load models
const models = require("./models");
models.sequelize.authenticate().then(() => {
	console.log('Connected to SQL Database: ', config.db_name);
})
.catch(err => {
    console.error('Unable to connect to SQL database: ', config.db_name);
});
if (config.app === 'dev') {
	// creates table if they don't already exist
	models.sequelize.sync();

	//deletes all tables then recreates them useful for testing and development purposes
	//models.sequelize.sync({ force: true });
}

// Adding middleware cors
app.use(cors());

// Set our api routes
app.use('/v1', routeV1);

// Home route
app.use('/', function(req, res) {
	res.statusCode = 200;
	res.json({ status: "success", message: "Parcel Pending API", data: {}})
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Render the error page
	res.status(err.status || 500);
	res.render('error');
});

// Start the server.
app.listen('3000', function() {
	console.log('The backend is working.');
});

module.exports = app;

//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', parseError(error));
});