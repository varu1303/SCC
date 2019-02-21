const express = require('express');
const router = express.Router();
const hash = require('./middlewares/hash');

const Admin = require('../mongo/AdminSchema');
const response = require('../config/response');

router.post('/signup', hash, (req, res) => {
    
    let { email, emailHash, passwordHash, name } = req.body;
    let admin = new Admin({
        email,
        password: passwordHash,
        emailHash,
        name
    });

    admin.save()
        .then(data => {
            res.status('200').json(response(true, 'Sign Up Complete.'));
        })
        .catch(err => {
            console.log(err);
            res.status('500').json(response(false, 'Sign Up Failed'));
        })
})

router.post('/login', (req, res) => {
    res.send('LOGIN_ADMIN');
})


module.exports = router;
