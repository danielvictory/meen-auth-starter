// Required Dependencies
const express = require('express');
const bcrypt = require('bcrypt');

// Set Router
const userRouter = express.Router();

// Set model to variable
const User = require('../models/user.js');

// Routes

// ====== Create ======
userRouter.post('/', (req, res) => {
    let b = req.body
    
    b.password = bcrypt.hashSync(b.password, bcrypt.genSaltSync(10));

    const u = new User(b)
    u.save().then(res.redirect('/'))

    //res.send(req.body);
});

// Export
module.exports = userRouter;