const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    date: { type: String, require: true },
    website: { type: String, require: true },
    url: { type: String, require: true },
    img: { type: String, require: true }
});

module.exports = mongoose.model('Event', eventSchema);