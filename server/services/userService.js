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

module.exports = {
    addUser
}