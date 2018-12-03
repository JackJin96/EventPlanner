const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    date: { type: String, require: true },
    website: { type: String, require: true },
    url: { type: String, require: true },
    img: { type: String, require: true }
});

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
    provider: { type: String, required: true },
    interestedEvents: [eventSchema]
});

const EventModel = mongoose.model('Event', eventSchema);
const UserModel = mongoose.model('User', userSchema);

module.exports = {
    EventModel,
    UserModel
}