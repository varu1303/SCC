const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResidentSchema = new Schema({
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
    }
})

const Resident = mongoose.model('Resident', ResidentSchema);
module.exports = Resident;
