const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const CondoSchema = new Schema({
    name: {
        type: String
    },
    Address: {
        line1: String,
        line2: String,
        pinCode: String,
        landmark: String,
        Country: String
    },
    location: {
        long: String,
        lat: String
    },
    admin: [{ type: ObjectId, ref: 'Admin' }], // One to Few - Referenced because Admins need to be 
                                               // accessed stand alone. No reference because Admins
                                               // can change display after getting rights!
    description: {
        type: String,
        apartmentCount: Number
    },
    gallery: {
        display: {
            type: String
        },
        cover: {
            type: String
        }
    },
    amenities: [{ name: String, icon: String, activity: Boolean  }] // Embeded because nothing changes,
                                                                    // if icon changes, update image in
                                                                    // server not the name.
    // apartment: [{ type: ObjectId, ref: 'Apartment' }] ** Apartments can be around 2k so, use PARENT REF.
})

const Condo = mongoose.model('Condo', CondoSchema);

module.exports = Condo;
