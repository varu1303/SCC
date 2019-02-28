const express = require('express');
const router = express.Router();
const hash = require('./middlewares/hash');

const Admin = require('../mongo/AdminSchema');
const Condo = require('../mongo/CondoSchema');
const response = require('../config/response');

router.post('/signup', hash, (req, res) => {
    
    let { email, emailHash, passwordHash, name, condo } = req.body;
    let admin = new Admin({
        email,
        password: passwordHash,
        emailHash,
        name,
        condo
    });

    admin.save()
        .then(data => {
            res.status('201').json(response(true, 'Sign Up Complete.'));
        })
        .catch(err => {
            console.log(err);
            res.status('500').json(response(false, 'Sign Up Failed'));
        })
})

router.get('/searchCondo', (req, res) => {

    let searchText = req.body.condoName;

    if (searchText) {
        Condo.find({ name: { "$regex": searchText, "$options": "i" }})
            .then(data => {
                if (data && data.length)
                    res.status('200').json(response(true, data));
                else
                    res.status('404').json(response(true, 'No Results.'));
            })
            .catch(err => {
                console.log(err);                    
                res.status('500').json(response(true, 'Error in getting Search Results.'));
            })
    } else {
        res.end();
    }
})

router.post('/login', (req, res) => {
    res.send('LOGIN_ADMIN');
})


module.exports = router;
