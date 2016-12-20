// require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// const expressJWT = require('express-jwt');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

// app.use(expressJWT({ secret: process.env.SECRET }).unless({ path: ['/favicon.ico', '/api/user/login', '/api/user/signup', '/api/blog', '/api/artists', '/api/events', /^\/api\/blog\/.*/] }));


app.listen(PORT, () => console.log('server here! listening on', PORT));
