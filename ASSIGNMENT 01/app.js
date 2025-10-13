const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the index router
const indexRouter = require('./controllers/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;