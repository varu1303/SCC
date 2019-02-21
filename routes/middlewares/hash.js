const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (req, res, next) => {

    bcrypt.hash(req.body.email, saltRounds)
        .then(function(hash) {
            req.body.emailHash = hash;
            bcrypt.hash(req.body.password, saltRounds)
                .then(function(hash) {
                    req.body.passwordHash = hash;
                    next();
                })
                .catch(err => {
                    res.end();
                })
                
        })
        .catch(err => {
            res.end();
        })
}
