const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const ApartmentSchema = new Schema({
    no: {
        type: String
    },
    condo: { type: ObjectId, ref: 'Condo' },
    residents: [{ type: ObjectId, ref: 'Resident' }]
})

const Apartment = mongoose.model('Apartment', ApartmentSchema);
module.exports = Apartment;
