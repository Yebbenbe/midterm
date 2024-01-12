/////////////////////////////////////////////////////////////////////////////
// Configuration and Middleware
/////////////////////////////////////////////////////////////////////////////

// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

// db requirements
const { Pool } = require('pg'); // check this
// need to import db.js somehow - check last project
// this might be done by .env file

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));



/////////////////////////////////////////////////////////////////////////////
// Routing
/////////////////////////////////////////////////////////////////////////////

// Separated Routes for each Resource
const userApiRoutes = require('./routes/users-api');
const usersRoutes = require('./routes/users');

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const mapRoutes = require('./routes/map');
const mymapsRoutes = require('./routes/mymaps');
const favouritesRoutes = require('./routes/favourites');

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/map', mapRoutes);

app.use('/mymaps', mymapsRoutes);
app.use('/favourites', favouritesRoutes);


// Home page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/practice', (req, res) => {
  res.render('practice');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
