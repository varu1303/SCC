const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Admins choose from complete collection and selected items get updated in amenites (Condo collection) array
const AmenityRefSchema = new Schema({
    name: {
        type: String
    },
    Icon: {
        icon: String
    },
    activity: { type: Boolean, default: false } // true for bookable activities*
})

const AmenityRef = mongoose.model('AmenityRef', AmenityRefSchema);
module.exports = AmenityRef;
