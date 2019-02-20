const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const BookingSchema = new Schema({
    amenity: { name: String, icon: String, slot: String }
})

const Booking = mongoose.model( 'Booking', BookingSchema );
module.exports = { BookingSchema, Booking };
