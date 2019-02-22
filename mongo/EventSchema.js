const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.ObjectId;
// Archived Events go here - A job removes them from embedded array in Condo document based
// on expires on date
const EventSchema = new Schema({ 
    pinned: Boolean,
    title: String, 
    body: String, 
    date: Date, 
    venue: String, 
    postedOn: Date, 
    expiresOn: Date, 
    op: { adminId: ObjectId, name: String, display: String },
    deletedBy: { type: ObjectId, default: null },
    condo: Schema.Types.ObjectId
})

const Event = mongoose.model('Event', EventSchema);
module.exports = { EventSchema, Event };
