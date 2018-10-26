const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('Server started!');
  });

app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName });
});

/////////////////////////

var request = require("request");

var options = { method: 'GET',
  url: 'https://www.eventbriteapi.com/v3/events/',
  qs: 
   { token: '7JK6P23DAHC7QIMSHZYF',
     'location.address': 'Boston',
     'start_date.range_start': '2018-11-08T15:41:05Z',
     'start_date.range_end': '2018-11-10T15:41:05Z' },
  token: '7JK6P23DAHC7QIMSHZYF'
 },
  headers:
   { 'Postman-Token': '64de2995-6bb8-4c1e-b732-b630baaa97cb',
     'cache-control': 'no-cache' } };

app.route('/api/events').get((req, res) => {
  let times = [];
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    jsonbody = JSON.parse(body);
    res.send(jsonbody);
  });
});