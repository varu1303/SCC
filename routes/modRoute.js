const express = require('express');
const router = express.Router();

router.post('/registerCondo', (req, res) => {
    res.send('MOD_REGISTER_CONDO');
})

module.exports = router;
