const request = require("request");
const bodyParser = require('body-parser');

const config = require('../config');

// redis module for caching:
const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = config.redis.TIMEOUT_IN_SECONDS;

// MongoDB models:
const userEventModels = require('../models/userEventModels');
const EventModel = userEventModels.EventModel;
const UserModel = userEventModels.UserModel;

const getCachedEvents = () => {
    cachedEvents = {}
    return new Promise((resolve, reject) => {
        redisClient.get('cachedEvents/EB', data => {
            if (data) {
                cachedEvents.EB = JSON.parse(data)['events'];
            }
        });
        redisClient.get('cachedEvents/TM', data => {
            if (data) {
                cachedEvents.TM = JSON.parse(data);
            }
        });
        // could be a better way to resolve async function calls
        setTimeout(() => {
            resolve(cachedEvents);
        }, 500);
    });
}

const getEventsEB = (req) => {

    location_address = req.query['location.address'];
    location_within = req.query['location.within'];
    start_data_range_start = req.query['start_date.range_start'];
    start_date_range_end = req.query['start_date.range_end'];

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
        const key = JSON.stringify(EB_options.qs);
        const key_cache = 'cachedEvents/EB';
        redisClient.get(key, data => {
            if (data) {
                resolve(JSON.parse(data));
            } else {
                request(EB_options, function (error, response, body) {
                    if (error) throw new Error(error);
                    redisClient.set(key, body, redisClient.redisPrint);
                    redisClient.set(key_cache, body, redisPrint);
                    redisClient.expire(key, TIMEOUT_IN_SECONDS);
                    jsonbody = JSON.parse(body);
                    resolve(jsonbody);
                });
            }
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
        const key = JSON.stringify(TM_options.qs);
        const key_cache = 'cachedEvents/TM';
        redisClient.get(key, data => {
            if (data) {
                resolve(JSON.parse(data));
            } else {
                request(TM_options, function (error, response, body) {
                    if (error) throw new Error(error);
                    jsonbody = JSON.parse(body);
                    jsonevents = jsonbody._embedded.events;
                    redisClient.set(key, JSON.stringify(jsonevents), redisClient.redisPrint);
                    redisClient.set(key_cache, JSON.stringify(jsonevents), redisClient.redisPrint);
                    redisClient.expire(key, TIMEOUT_IN_SECONDS);
                    resolve(jsonevents);
                });
            }
        });
    });
}

module.exports = {
    getEventsEB,
    getEventsTM,
    getCachedEvents
}