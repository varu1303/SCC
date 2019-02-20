const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
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
    },
    apartment: { type: ObjectId, ref: 'Apartment' }, // To see other residents and one's Condo 
    screened: { type: Boolean, default: false }, // When updated to true - added to Apartment Document
    vacatedOn: { type: Date, default: null } // When date gets a value need to be removed from Apartment
})

const Resident = mongoose.model('Resident', ResidentSchema);
module.exports = Resident;
