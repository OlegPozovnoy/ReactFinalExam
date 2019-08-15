// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const movieRoutes = require('./routes/movies');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/movies', movieRoutes);

// Exporting the changes
module.exports = app;