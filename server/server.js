const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const restRouter = require('./routes/rest');

const config = require('./config');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use('/api/v1', restRouter);

app.listen(config.app.port, () => {
    console.log('Server started!');
  });