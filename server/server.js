const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

// app.route('/api/cats').post((req, res) => {
//   res.send(201, req.body);
// });

app.listen(8000, () => {
    console.log('Server started!');
  });

app.route('/api/cats').get((req, res) => {
  console.log(req.body);
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName });
});

/////////////////////////

const request = require("request");

app.route('/api/events/EB').get((req, res) => {
    location_address = req.headers['location.address'];
    location_within = req.headers['location.within'];
    start_data_range_start = req.headers['start_date.range_start'];
    start_date_range_end = req.headers['start_date.range_end'];

    console.log(location_address);
    console.log(start_data_range_start);
    console.log(start_date_range_end);

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

    request(EB_options, function (error, response, body) {
    if (error) throw new Error(error);
    jsonbody = JSON.parse(body);
    //console.log(jsonbody)
    res.send(jsonbody.events);
  });
});

app.route('/api/events/TM').get((req, res) => {

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

    request(TM_options, function (error, response, body) {
    if (error) throw new Error(error);
    // console.log(typeof(body))
    jsonbody = JSON.parse(body);
    console.log(jsonbody._embedded.events);
    res.send(jsonbody._embedded.events);
  });
});


// const TM_ptions = { method: 'GET',
//   url: 'https://app.ticketmaster.com/discovery/v2/events',
//   qs:
//    { city: 'Boston',
//      apikey: 'yvE2GqWdA8xBuDVumRZQedlmIL1z6mWi%0A' },
//   headers:
//    { 'Postman-Token': '98d7934b-1e52-4683-b8e2-0622ab1dda61',
//      'cache-control': 'no-cache' } };

// request(TM_options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
