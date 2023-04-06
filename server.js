// Dependencies
const express = require('express');
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
    // Controllers


// Listen to app connect
app.listen(PORT, () => {console.log(`WE'RE IN.... to PORT ${PORT}`)})