const request = require("request");
const bodyParser = require('body-parser');

const getEventsEB = (req) => {

    // console.log(req.headers);
    // console.log('\n\n\n!!!!');
    location_address = req.headers['location.address'];
    location_within = req.headers['location.within'];
    start_data_range_start = req.headers['start_date.range_start'];
    start_date_range_end = req.headers['start_date.range_end'];

    // console.log(location_address);
    // console.log(start_data_range_start);
    // console.log(start_date_range_end);

    const EB_options = { method: 'GET',
    url: 'https://www.eventbriteapi.com/v3/events/search/',
    qs:
    { token: '3YT75UUCQUZWHOKXFDMZ',
      'location.address': location_address,
      'location.within': location_within,
      'start_date.range_start': start_data_range_start,
      'start_date.range_end': start_date_range_end
    }
    ,
    headers:
    { 'Postman-Token': '64de2995-6bb8-4c1e-b732-b630baaa97cb',
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

    city_name = req.headers['location.address'];
    radius = req.headers['location.within'];
    start_data_range_start = req.headers['start_date.range_start'];
    start_date_range_end = req.headers['start_date.range_end'];

    const TM_options = { method: 'GET',
        url: 'https://app.ticketmaster.com/discovery/v2/events',
        qs:
        { apikey: 'yvE2GqWdA8xBuDVumRZQedlmIL1z6mWi',
        'city': city_name,
        'radius': radius,
        'startDateTime': start_data_range_start,
        'endDateTime': start_date_range_end
        }
        ,
        headers:
        { 'Postman-Token': '64de2995-6bb8-4c1e-b732-b630baaa97cb',
        'cache-control': 'no-cache' }
    };

    return new Promise((resolve, reject) => {
        request(TM_options, function (error, response, body) {
            if (error) throw new Error(error);
            jsonbody = JSON.parse(body);
            console.log(jsonbody._embedded.events);
            resolve(jsonbody._embedded.events);
        });
    });
}

module.exports = {
    getEventsEB,
    getEventsTM
}