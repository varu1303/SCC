const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const AdminSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    verifiedEmail: { type: Boolean, default: false },
    emailHash: { type: String },
    display: {
        type: String
    },
    name: {
        type: String
    },
    rights: { type: Boolean, default: false }, // To be approved by DB Admin
    condo: { type: ObjectId, ref: 'Condo' } // Reference Condo as need access to all the booking details,
                                            // events and Annocuements on Admin's UI page
})


// Admins will stay connected throughout, need socket connecting for live notificatins***
const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
