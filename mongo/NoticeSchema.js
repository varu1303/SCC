const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.ObjectId;
// Archived Notices go here - A job removes them from embedded array in Condo document based
// on expires on date
const NoticeSchema = new Schema({ 
    pinned: Boolean,
    title: String, 
    body: String, 
    postedOn: Date, 
    expiresOn: Date,
    op: { adminId: ObjectId, 
          name: String, 
          display: String }, 
    deletedBy: { type: ObjectId, default: null },
    condo: Schema.Types.ObjectId
});

const Notice = mongoose.model('Notice', NoticeSchema);
module.exports = { NoticeSchema, Notice };