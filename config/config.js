const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    mod_pass: process.env.MOD_PASS
}