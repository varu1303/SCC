const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Condo = require('../mongo/CondoSchema');
const Whitelist = require('../mongo/ModWhitelist');
const response = require('../config/response');
const { mod_pass } = require('../config/config');

router.post('/registerCondo', (req, res) => {
    // console.log(request.headers['x-forwarded-for']);
    // Whitelist.findOne({ ip: req.connection.remoteAddress })
    // Whitelist.findOne({ ip: '1'})
    //     .then(data => {
    //         if (data) {
    //             console.log(req.body);
                let { email, password, condo } = req.body;
                // if (email === 'mod@scc.com') {
                    // bcrypt.compare(password, mod_pass, function(err, result) {
                        // if (result) {
                            let newCondo = new Condo({...condo});
                            newCondo.save()
                                .then(data => {
                                    res.status('200').json(response(true, 'Moderator OK! Condo Saved!'));
                                })
                                .catch(err => {
                                    res.status('500').json(response(true, 'Moderator OK! Condo could not beSaved!'));
                                })
                        // } else {
                        //     res.status('401').json(response(false, 'Incorrect Password.')); 
                        // }
                    // });
                // } else {
                //     res.status('404').json(response(false, 'Incorrect Email.'));
                // }
            // } else {
            //     res.status('401').json(response(false, 'IP not whitelisted.'));
            // }
        // })
        // .catch(err => {
        //     res.end();
        // })
})

module.exports = router;
