const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { EventSchema } = require('../Notice/EventSchema');
const { NoticeSchema } = require('../Notice/NoticeSchema');

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
    admin: [{ type: ObjectId, 
              name: String, display: String }], // One to Few - Normalised*
                                                // display image to be saved with admin's id.
                                                // Can replace image on server with same name
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
    amenities: [{ name: String, icon: String, count: Number,
                  activity: Boolean }], // Activity true for bookable amenity!
                                    // Embeded because nothing changes,
                                    // if icon changes, update image in
                                    // server not the name.
    apartmentNoRule: { type: String }, // While Resident Sign up - instructs how to search/register their
                                       // apartment
    events: [EventSchema],
    notices: [NoticeSchema]
    // apartment: [{ type: ObjectId, ref: 'Apartment' }] ** Apartments can be around 2k so, use PARENT REF.
})

const Condo = mongoose.model('Condo', CondoSchema);

module.exports = Condo;
