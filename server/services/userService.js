const bodyParser = require('body-parser');

const userEventModels = require('../models/userEventModels');
const UserModel = userEventModels.UserModel;

const addUser = (user) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user.email },  (err, userdata) => {
            if (userdata) {
                console.log('User already exists!');
            } else {
                const newuser = new UserModel({
                    email: user.email,
                    name: user.name,
                    photoUrl: user.photoUrl,
                    provider: user.provider,
                    interestedEvents: []
                });
                newuser.save();
                resolve(newuser);
            }
        });
    });
}

const addInterestedEvent = (reqbody) => {
    user = reqbody.user
    event = reqbody.event
    // use these info to add event to the user's interested event list
    console.log(reqbody);
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user.email },  (err, userdata) => {
            if (userdata) {
                let eventInList = false;
                userdata.interestedEvents.forEach((oldEvent) => {
                    if (oldEvent.url == event.url) {
                        console.log('event already added!');
                        eventInList = true;
                    }
                });
                if (eventInList === false) {
                    userdata.interestedEvents.push(event);
                    userdata.save().then(res => console.log(res));
                    resolve(event);
                } else {
                    resolve({ warning:'Event is already in your interest list.' });
                }
            } else {
                resolve(err);
            }
        });
    });
}

module.exports = {
    addUser,
    addInterestedEvent
}