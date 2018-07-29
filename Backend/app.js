'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');
require('dotenv').config({ path: 'variables.env' });

const app = express();
//bodyparser for get and post requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Make CORS-enables for all origins.
app.use(cors());

//All routes found here.
app.use('/',routes);

//Export the bot to start.js.
module.exports = app;
