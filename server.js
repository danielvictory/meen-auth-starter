// Dependencies
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

// env variables
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

// Set app
const app = express();

// Setup Database connection
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

// Database Connection Error/Success
    // Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));
    // Controllers
        // Users
const userController = require('./controllers/users');
app.use('/users', userController);
        // Sessions
const sessionsController = require('./controllers/sessions')
app.use('/sessions', sessionsController)

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Listen to app connect
app.listen(PORT, () => {console.log(`WE'RE IN.... to PORT ${PORT}`)})