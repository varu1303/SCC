const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WhitelistSchema = new Schema({
    ip: String
});

const Whitelist = mongoose.model('Whitelist', WhitelistSchema);
module.exports = Whitelist;
