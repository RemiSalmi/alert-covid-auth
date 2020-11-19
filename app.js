//Init express
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKey  = fs.readFileSync('/etc/letsencrypt/live/alert-covid.ovh/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/alert-covid.ovh/fullchain.pem;', 'utf8');

var credentials = {key: privateKey, cert: certificate};

//Routes imports
const authRoutes = require('./routes/authRoutes');


app.use('/auth', authRoutes);


//Controllers imports
const authController = require('./controllers/authController');


// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(4000);
httpsServer.listen(4001);






