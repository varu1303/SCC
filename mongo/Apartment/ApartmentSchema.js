const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { BookingSchema } = require('../Booking/BookingSchema');

const ObjectId = Schema.Types.ObjectId;
const ApartmentSchema = new Schema({
    no: {
        type: String
    },
    condo: { type: ObjectId, ref: 'Condo' }, // Reference Condo as required by Resident when gets signed up
    residents: [{ 
        refId: ObjectId, 
        name: String,
        display: String
    }], // Normalizing Resident, Resident cannot update details after getting screened*, will get added here
       // when screened is set to true and Resident document wont change after that.
    bookings: [BookingSchema]
})

const Apartment = mongoose.model('Apartment', ApartmentSchema);
module.exports = Apartment;
