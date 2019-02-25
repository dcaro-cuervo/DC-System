//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/routes');

//connect mongoDB
mongoose.connect('mongodb://localhost:27017/backend');

//on connection
mongoose.connection.on('connected', ()=>{
	console.log('MongoDB connected at port 27017');
});

//on connection Error
mongoose.connection.on('error', (err)=>{
	console.log(err);
});


const PORT = 3000;

//adding middleware cors
app.use(cors());

//body parser
app.use(bodyparser.json());

//set our api routes
app.use('/api', route);

app.get('/', (req, res)=>{
	res.send('some changes')
})
app.listen(PORT, ()=>{
	console.log('Server has been started at port:'+PORT);
})