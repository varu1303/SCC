const mongoose = require('mongoose');
const URI = require('../config/mongoURI');

mongoose.connect(URI, { useNewUrlParser: true, autoIndex: false });

const db = mongoose.connection;
module.exports = db;
