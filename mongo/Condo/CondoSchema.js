const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const CondoSchema = new Schema({
    name: {
        type: String
    },
    admin: [{ type: ObjectId, ref: 'Admin' }],
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
        },
        facility: {
           // whatever facility gets any image added becomes a key and goes in this 
        }
    },
    apartment: [{ type: ObjectId, ref: 'Apartment' }]
})

const Condo = mongoose.model('Condo', CondoSchema);

module.exports = Condo;
