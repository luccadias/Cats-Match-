'use strict'
const express = require('express');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');

dotenv.config()
let app = express();

app.use(fileUpload());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

let backAppRoutes = require('./routes/backAppRoutes');
let frontAppRoutes = require('./routes/frontAppRoutes');
app.use('/',backAppRoutes);
app.use('/',frontAppRoutes);

var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function () {
	console.log("server starting on " + appEnv.url);
});
