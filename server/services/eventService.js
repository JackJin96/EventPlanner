const request = require("request");
const bodyParser = require('body-parser');

const config = require('../config');

// MongoDB models:
const userEventModels = require('../models/userEventModels');
const EventModel = userEventModels.EventModel;
const UserModel = userEventModels.UserModel;

const getEventsEB = (req) => {

    // console.log(req.query);
    // console.log('\n\n\n!!!!');
    location_address = req.query['location.address'];
    location_within = req.query['location.within'];
    start_data_range_start = req.query['start_date.range_start'];
    start_date_range_end = req.query['start_date.range_end'];

    // console.log(location_address);
    // console.log(start_data_range_start);
    // console.log(start_date_range_end);

    const EB_options = { method: 'GET',
    url: config.app.EB.apiurl,
    qs:
    { token: config.app.EB.token,
      'location.address': location_address,
      'location.within': location_within,
      'start_date.range_start': start_data_range_start,
      'start_date.range_end': start_date_range_end
    }
    ,
    headers:
    { 'Postman-Token': config.app.postman_token,
      'cache-control': 'no-cache' }
    };

    return new Promise((resolve, reject) => {
        request(EB_options, function (error, response, body) {
            if (error) throw new Error(error);
            jsonbody = JSON.parse(body);
            resolve(jsonbody);
        });
    });
}

const getEventsTM = (req) => {

    city_name = req.query['location.address'];
    radius = req.query['location.within'];
    start_data_range_start = req.query['start_date.range_start'];
    start_date_range_end = req.query['start_date.range_end'];
    size = req.query['size'];

    const TM_options = { method: 'GET',
        url: config.app.TM.apiurl,
        qs:
        { apikey: config.app.TM.apikey,
        'city': city_name,
        'radius': radius,
        'startDateTime': start_data_range_start,
        'endDateTime': start_date_range_end,
        'size': size
        }
        ,
        headers:
        { 'Postman-Token': config.postman_token,
        'cache-control': 'no-cache' }
    };

    return new Promise((resolve, reject) => {
        request(TM_options, function (error, response, body) {
            if (error) throw new Error(error);
            jsonbody = JSON.parse(body);
            resolve(jsonbody._embedded.events);
        });
    });
}

const addInterestedEvent = (reqbody) => {
    user = reqbody.user
    event = reqbody.event
    // use these info to add event to the user's interested event list
        console.log(reqbody);
        return new Promise((resolve, reject) => {
        UserModel.findOne({ email: user.email },  (err, data) => {
            if (data) {
                console.log('user Exists!');
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
    getEventsEB,
    getEventsTM,
    addInterestedEvent
}