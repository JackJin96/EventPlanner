const bodyParser = require('body-parser');

const userEventModels = require('../models/userEventModels');
const UserModel = userEventModels.UserModel;
const EventModel = userEventModels.EventModel;

// add new user to the db upon log in
const addUser = (user) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user.email },  (err, userdata) => {
            if (userdata) {
                resolve({ warning: 'User already exists!'});
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

// get all events in user's interest list
const getInterestedEvents = (req) => {
    user_email = req.query['user_email'];
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user_email },  (err, userdata) => {
            if (userdata) {
                resolve(userdata.interestedEvents);
            } else {
                resolve({ warning: 'User already exists!'});
            }
        });
    });
}

// add an event to user's interest list when 'interested' button is clicked
const addInterestedEvent = (reqbody) => {
    user = reqbody.user
    event = reqbody.event
    // use these info to add event to the user's interested event list
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user.email },  (err, userdata) => {
            if (userdata) {
                let eventInList = false;
                userdata.interestedEvents.forEach((oldEvent) => {
                    if (oldEvent.url == event.url) {
                        eventInList = true;
                    }
                });
                if (eventInList === false) {
                    userdata.interestedEvents.push(event);
                    userdata.save();
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

// remove an event from user's interest list when 'remove' button is clicked
const deleteInterestedEvent = (req) => {
    user_email = req.query['user_email'];
    event_url = req.query['event_url'];
    console.log('user email: ' + user_email);
    console.log('event_url: ' + event_url);
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user_email },  (err, userdata) => {
            if (userdata) {
                userdata.interestedEvents.forEach((oldEvent) => {
                    if (oldEvent.url === event_url) {
                        console.log('event found!');
                        const deletedEvent = oldEvent;
                        oldEvent.remove();
                        userdata.save();
                        resolve(deletedEvent);
                    }
                });
            } else {
                resolve(err);
            }
        });
    });
};

module.exports = {
    addUser,
    addInterestedEvent,
    deleteInterestedEvent,
    getInterestedEvents
}