const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    display: {
        type: String
    },
    name: {
        type: String
    },
})

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
